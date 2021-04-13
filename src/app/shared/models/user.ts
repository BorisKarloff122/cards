import {Deck} from "./deck";

export interface User {
  userName: string;
  userPassword: string;
  email: string
  id?: number
  selectedDeck: number | Deck;
  decks: number[];
}

