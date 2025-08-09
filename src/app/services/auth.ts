
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Correct

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Auth {
  private apiUrl = 'http://localhost:3000/api'; // change to your backend

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
