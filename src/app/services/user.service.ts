import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../interface/login-user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="http://localhost:3000/LoginUser";

  constructor(private http: HttpClient) { }

    getUser(user: string, password:string) : Observable<LoginUser>{
      let User={
        user:'',
        password:''
      }
      return this.http.post<LoginUser>(this.apiUrl, User);
    }
  }