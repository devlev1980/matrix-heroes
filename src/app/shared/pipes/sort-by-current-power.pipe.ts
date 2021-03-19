import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from '../../modules/login/types/hero.interface';

@Pipe({
  name: 'sortByCurrentPower',
})
export class SortByCurrentPowerPipe implements PipeTransform {
  transform(heroes: HeroInterface[], hero: HeroInterface) {
    console.log(hero);
    // return heroes.sort((a, b) => {
    //   // if (hero.current_power < hero.current_power) {
    //   //   return 1;
    //   // } else if (hero.current_power > hero.current_power) {
    //   //   return -1;
    //   // } else {
    //   //   return 0;
    //   // }
    // });
  }
}
