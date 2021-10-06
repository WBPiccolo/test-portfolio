import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faOdnoklassniki as faOdnoklassniki } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope as faEnvelope,
  faCalendar as faCalendar,
  faMap as faMap,
} from '@fortawesome/free-regular-svg-icons';
import {
  faPhone as faPhone,
  faLock as faLock,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AppComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faOdnoklassniki,
      faEnvelope,
      faCalendar,
      faMap,
      faPhone,
      faLock
    );
  }
}
