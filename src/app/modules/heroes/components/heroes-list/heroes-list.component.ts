import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable, Subject } from 'rxjs';
import { HeroInterface } from '../../../../login/types/hero.interface';
import { Router } from '@angular/router';
import { LogService } from '../../../../shared/services/log.service';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';

@Component({
  selector: 'yl-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent implements OnInit, OnDestroy {
  heroes$: Observable<HeroInterface[]>;
  authorizedCoach: IRoute;
  destroy$: Subject<boolean> = new Subject<boolean>();
  showSpinner: boolean = false;
  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private logger: LogService,
    private lsService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.authorizedCoach = window.history.state;

    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroesService.getHeroes();
    // this.heroes$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
    //   this.logger.debug('Get heroes', 'heroes-list', data);
    // });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}

interface IRoute {
  coach: string;
  navigationId: number;
}
