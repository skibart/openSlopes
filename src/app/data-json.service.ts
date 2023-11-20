import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://skiresortsapi.onrender.com/resorts';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`).pipe(
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }
}
