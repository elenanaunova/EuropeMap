import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CapitalCity } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiurl = 'api/capitalCities';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
  
  getCity(capitalCity: string): Observable<CapitalCity> {
    const url = `${this.apiurl}/${capitalCity}`;
    return this.http.get<CapitalCity>(url).pipe(
      catchError(this.handleError)
    );
  }
}
