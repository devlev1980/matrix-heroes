import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SortByCurrentPowerPipe } from './pipes/sort-by-current-power.pipe';
import { CoachService } from './services/coach.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [SortByCurrentPowerPipe, HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, SortByCurrentPowerPipe, HeaderComponent],
  providers: [],
})
export class SharedModule {}
