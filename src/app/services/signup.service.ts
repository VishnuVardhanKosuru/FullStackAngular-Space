import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/api/signup'; // Backend API URL

  constructor(private http: HttpClient) {}

  registerUser(signupData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, signupData);
  }
}
