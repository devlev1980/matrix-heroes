import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesService } from './services/heroes.service';
import { HeroCardComponent } from './components/heroes-list/hero-card/hero-card.component';
import { SharedModule } from '../../shared/shared.module';
import { CoachService } from '../../shared/services/coach.service';
import { CustomSpinnerDirective } from './directives/custom-spinner.directive';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent,
    CustomSpinnerDirective,
  ],
  imports: [CommonModule, HeroesRoutingModule, SharedModule],
  providers: [HeroesService, CoachService],
})
export class HeroesModule {}
