import { Card } from "./card";
import { Warlord } from "./warlord";

export interface Deck {
  id?: number;
  cards: Card[];
  warlord: Warlord;
}
