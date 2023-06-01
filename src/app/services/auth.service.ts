import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModul';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44363/api/';
  constructor(private httpClient:HttpClient) { }

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    this.setUserName(user.email);
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'auth/login',
      user
    );
  }

  register(user: RegisterModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'auth/register',
      user
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  setUserName(fullName: string) {
    localStorage.setItem('fullName', fullName);
  }

  getEmail(): string {
    return localStorage.getItem('fullName');
  }
}
