import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../../../shared/models/user";
import { Deck } from "../../../shared/models/deck";
import { Warlord } from "../../../shared/models/warlord";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public currentUser$ = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient
  ) { }

  public getCurrentUser(): Observable<User>{
    return this.http.get<User>('activeUser');
  }

  public getCurrentUserDeck(id): Observable<Deck>{
    return this.http.get<Deck>(`decks/${id}`);
  }

  public getDeckWarlord(lordId): Observable<Warlord>{
    return  this.http.get<Warlord>(`warlords/${lordId}`)
  }
}
