import {Primary} from "./Primary";
import {Secondary} from "./Secondary";
import {Melee} from "./Melee";
import {Alert} from "./Alert";
import {Archwing} from "./Archwing";
import {Archgun} from "./Archgun";
import { Archmelee } from "./Archmelee";
import {Companion} from "./Companion";
import {Disclaimer} from "./Disclaimer";
import {SentinelWeapon} from "./SentinelWeapon";
import {Tier} from "./Tier";
import {Item} from "./Item";

export class Database {
  primaries: (Item | Tier)[];
  secondaries: (Item | Tier)[];
  melees: (Item | Tier)[];
  archwings: Archwing[];
  archguns: Archgun[];
  archmelees: Archmelee[];
  companions: Companion[];
  sent_weps: SentinelWeapon[];
  //These are kind of annoying
  Primaries: {};
  Secondaries: {};
  Melees: {};

  version: string;
  alerts: Alert[];
  disclaimers: Disclaimer[];
  faq: Disclaimer[];
}

export enum Categories {
  PRIMARY = 'primaries',
  SECONDARY = 'Secondaries',
  MELEE = 'Melees',
  ARCHWING = 'Archwings',
  ARCHGUN = 'Archguns',
  ARCHMELEE = 'Archmelees',
  COMPANIONS = 'Companions'
}

export const columnDefs = {
  //TODO add munitions to model
  'primaries': ['name', 'category', 'type', 'munitions', 'dmg', 'mr', 'rivenDisposition', 'base'],
  'secondaries': ['name', 'type', 'dmg', 'mr', 'rivenDisposition', 'base'],
  'melees': ['name', 'type', 'dmg', 'mr', 'base', 'wepnotes']
};
