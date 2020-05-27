import {Item} from "./Item";

export class Primary extends Item {
  base: string;
  category: string;
  dmg: string;
  mr: number;
  rivenDisposition: number;
  type: string;
  munitions: string;
}

export class PrimCategory {
  categories = ['']
}
