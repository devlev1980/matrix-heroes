import { Component, Input, OnInit } from '@angular/core';
import { HeroInterface } from '../../../../login/types/hero.interface';
import { LogService } from '../../../../../shared/services/log.service';

@Component({
  selector: 'yl-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  @Input('hero') heroProps: HeroInterface;
  @Input('heroes') heroesProps: HeroInterface[];
  @Input('coach') coachProps: string;
  @Input('index') indexProps: number;
  isStartTraining: boolean = false;

  constructor(private logger: LogService) {}

  ngOnInit(): void {}

  onStartTraining(): void {
    this.isStartTraining = true;
    this.logger.debug(
      "Click on 'Start training button'",
      'Hero-card',
      this.isStartTraining
    );
  }
}
