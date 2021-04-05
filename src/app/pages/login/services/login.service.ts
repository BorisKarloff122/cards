import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public userRegister (user: User): Observable<User>{
    return this.http.post<User>(' http://localhost:3000/users', user);
  }
  
}
