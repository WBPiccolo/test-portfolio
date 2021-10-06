import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/shared/utilities';

@Component({
  selector: 'portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolio: Portfolio | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.portfolio);
  }
}
