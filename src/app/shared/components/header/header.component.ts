import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('coach') coachProps: string;
  constructor() {}

  ngOnInit(): void {}
}
