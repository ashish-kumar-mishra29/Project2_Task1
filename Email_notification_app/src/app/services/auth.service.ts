import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:7229/api/';

  createUser() {
    return this.http.post(this.baseUrl+'Registration/CreateUser', null, {
      responseType:'text'
    });
  }
}
