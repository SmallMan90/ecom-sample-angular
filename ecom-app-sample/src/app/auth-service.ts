// import { User } from '../models/users.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://localhost:7023';

  constructor(private http: HttpClient) { }

  registerUser(newUser: any): Observable<any> {
    newUser.id = '';
    return this.http.post<any>(this.apiUrl + '/api/User/register', newUser);
  }
  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/api/User/login', { username, password });
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    // const helper = new JwtHelperService();
    // const isExpired = helper.isTokenExpired(token);
    return true;
  }
}
