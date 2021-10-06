import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Portfolio } from '../shared/utilities';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getPortfolio(url: string) {
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results[0];
      }),
      catchError((err) => throwError(err))
    );
  }
}
