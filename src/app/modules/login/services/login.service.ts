import { Injectable, OnInit } from '@angular/core';
import { TrainerInterface } from '../types/trainer.interface';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  isAuthorized: boolean = false;

  private trainers: TrainerInterface[] = [
    {
      username: 'John',
      password: 'Asdfghjk123$',
    },
    {
      username: 'Tom',
      password: 'Asdfghjk123$',
    },
  ];
  constructor(private route: Router, private lsService: LocalStorageService) {
    this.lsService.getState().subscribe((data) => {
      console.log(data.userToken);
      const authTrainer = this.trainers.find(
        (u) => (u.username = data.userToken.username)
      );
      if (
        authTrainer.username === data.userToken.username &&
        authTrainer.password === data.userToken.password
      ) {
        this.isAuthorized = true;
        this.route.navigate(['/heroes'], {
          state: { coach: data.userToken.username },
        });
      } else {
      }
    });
  }
  ngOnInit() {}

  login(trainer: TrainerInterface): Observable<boolean> {
    // trainer.username = trainer.username.toLowerCase();
    const authTrainer = this.trainers.find(
      (u) => (u.username = trainer.username)
    );
    if (authTrainer && authTrainer.password === trainer.password) {
      this.isAuthorized = true;

      this.route.navigate(['/heroes'], {
        state: { coach: authTrainer.username },
      });
      return of(this.isAuthorized);
    } else {
      this.isAuthorized = false;
      return of(this.isAuthorized);
    }
  }
}
