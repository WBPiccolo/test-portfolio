import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Portfolio } from 'src/app/shared/utilities';

@Component({
  selector: 'portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolio!: Portfolio;
  icons = [
    { id: '1', icon: '', text: 'Hi, My name is', value: '' },
    { id: '2', icon: '', text: 'My email address is', value: '' },
    { id: '3', icon: '', text: 'My birthday is', value: '' },
    { id: '4', icon: '', text: 'My address is', value: '' },
    { id: '5', icon: '', text: 'My phone number is', value: '' },
    { id: '6', icon: '', text: 'My password is', value: '' },
  ];
  text = '';
  value = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.portfolio);
    this.icons[0].value = `${this.portfolio.name.first} ${this.portfolio.name.last}`;
    this.icons[1].value = this.portfolio.email;
    this.icons[2].value = moment(this.portfolio.dob.date).format('DD/MM/YYYY');
    this.icons[3].value = `${this.portfolio.location.street.number} ${this.portfolio.location.street.name}`;
    this.icons[4].value = this.portfolio.phone;
    this.icons[5].value = this.portfolio.login.password;
  }

  showInfo(icon: any) {
    console.log(icon);
    this.text = icon.text;
    this.value = icon.value;
  }
}
