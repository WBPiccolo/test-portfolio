import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/shared/utilities';

@Component({
  selector: 'portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolio: any;
  icons = [
    { id: '1', icon: '', showText: 'Test icona 1' },
    { id: '2', icon: '', showText: 'Test icona 2' },
    { id: '3', icon: '', showText: 'Test icona 3' },
    { id: '4', icon: '', showText: 'Test icona 4' },
    { id: '5', icon: '', showText: 'Test icona 5' },
    { id: '6', icon: '', showText: 'Test icona 6' },
  ];
  text = '';
  value = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.portfolio);
  }

  showInfo(icon: any) {
    console.log(icon);
    this.text = icon.showText;
    this.value = icon.id;
  }
}
