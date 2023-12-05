import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    if (!username) {
      return of(null);
    }
    
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get<any>(url);
  }
  
  getRepos(username: string, page: number, perPage: number): Observable<any[]> {
    if (!username) {
      return of([]);
    }
    console.log('getRepos called...');
    const validPerPage = Math.min(perPage, 100);

    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', validPerPage.toString());

    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<any[]>(url, { params });
  }

}
