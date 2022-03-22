import { Login } from './../models/login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://localhost/apimudat/auth/';

  constructor(private http: HttpClient) {}

  login(login: Login){
    return this.http.get(`${this.URL}login.php?username=${login.username}&password=${login.password}`);
  }

  registro(form: any){
    return this.http.post(`${this.URL}registro.php`, JSON.stringify(form));
  }
}
