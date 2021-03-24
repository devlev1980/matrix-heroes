import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes, HeroInterface } from '../../../login/types/hero.interface';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroInterface[]> {
    return this.http.get<Heroes>('../../assets/mock/MOCK_DATA.json').pipe(
      delay(3000),
      map((result) =>
        result.heroes.sort((a, b) => {
          if (a.current_power < b.current_power) {
            return -1;
          } else if (a.current_power > b.current_power) {
            return 1;
          } else {
            return 0;
          }
        })
      )
    );
  }
}
