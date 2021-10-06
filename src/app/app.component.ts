import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(
    private httpService: HttpService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getPortfolio().subscribe((res) => {
      this.portfolio = res;
      this.spinner.hide();
    });
  }

  getPortfolio() {
    return this.httpService.getPortfolio(this.portfolioURL);
  }
}
