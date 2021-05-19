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

  public userStarterDeck: object = {
    level:1,
    expRequired: 1000,
    decks:[],
    selectedDeck:1,
    icon: '../assets/img/icons/primaryIcon.jpg'
  };


  public userRegister (user: User): Observable<User>{
    return this.http.post<User>('users', user);
  }

  public getUser (userParam: string): Observable<User[]>{
    if(userParam.indexOf('@')!== - 1){
      return this.http.get<User[]>(`users?email=${userParam}`);
    }
    else{
      return this.http.get<User[]>(`users?userName=${userParam}`);
    }
  }

  public login (user: User): Observable<User>{
    return this.http.post<User>('activeUser', user);
  }

}
