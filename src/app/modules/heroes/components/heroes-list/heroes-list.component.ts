import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { HeroInterface } from '../../../login/types/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'yl-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<HeroInterface[]>;
  authorizedCoach: IRoute;

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.authorizedCoach = window.history.state;
    this.getHeroes();
    // console.log('Instance', this.coachService);
  }

  getHeroes(): void {
    this.heroes$ = this.heroesService.getHeroes();
  }
}
interface IRoute {
  coach: string;
  navigationId: number;
}
