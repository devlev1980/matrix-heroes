import { Component, Input, OnInit } from '@angular/core';
import { HeroInterface } from '../../../../login/types/hero.interface';

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
  constructor() {}

  ngOnInit(): void {}

  onStartTraining(): void {
    this.isStartTraining = true;
  }
}
