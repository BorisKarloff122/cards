import {Deck} from "./deck";

export interface User {
  userName: string;
  userPassword: string;
  email: string;
  level: number;
  expRequired: number;
  id?: number;
  selectedDeck: number | Deck;
  decks: number[];
}

