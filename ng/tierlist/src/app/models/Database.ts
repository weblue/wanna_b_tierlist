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

export class Database {
  primaries: Primary[];
  secondaries: Secondary[];
  melees: Melee[];
  archwings: Archwing[];
  archguns: Archgun[];
  archmelees: Archmelee[];
  companions: Companion[];
  sent_weps: SentinelWeapon[];

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
  'primaries': ['base', 'category', 'dmg', 'mr', 'rivenDisposition', 'name', 'notes', 'type'],
  'Secondaries': ['base', 'dmg', 'mr', 'rivenDisposition', 'name', 'notes', 'type'],
  'Melees': ['base', 'dmg', 'mr', 'name', 'type', 'wepnotes'],
  'Archwing': ['name', 'use', 'base', 'notes'],
  'Archgun': ['name', 'use', 'firing', 'notes', 'base'],
  'Archmelee': ['name', 'use', 'notes', 'base']
};
