import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Portfolio } from './shared/utilities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-portfolio';
  portfolioURL: string = 'https://randomuser.me/api';
  portfolio: Portfolio | undefined;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getPortfolio().subscribe((res) => {
      this.portfolio = res;
    });
  }

  getPortfolio() {
    return this.httpService.getPortfolio(this.portfolioURL);
  }
}
