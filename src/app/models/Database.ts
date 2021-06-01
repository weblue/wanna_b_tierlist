import {Archwing} from "./Archwing";
import {Archgun} from "./Archgun";
import {Archmelee} from "./Archmelee";
import {Companion} from "./Companion";
import {FAQPoint} from "./FAQPoint";
import {SentinelWeapon} from "./SentinelWeapon";
import {Item} from "./Item";
import {Tier} from "./Tier";

export class Database {
  primaries: (Item | Tier)[];
  secondaries: (Item | Tier)[];
  melees: (Item | Tier)[];
  archwings: Archwing[];
  archguns: Archgun[];
  archmelees: Archmelee[];
  companions: Companion[];
  sent_weps: SentinelWeapon[];

  Primaries: {};
  Secondaries: {};
  Melees: {};

  version: string;
  faq: FAQPoint[];
}

export enum Categories {
  PRIMARY = 'Primaries',
  SECONDARY = 'Secondaries',
  MELEE = 'Melees',
  ARCHWING = 'Archwings',
  ARCHGUN = 'Archguns',
  ARCHMELEE = 'Archmelees',
  COMPANIONS = 'Companions'
}

export const tierTypes = ['Exceptional', 'Satisfactory', 'Mediocre', 'Insufficient', 'Untested'];

export const columnDefs = {
  'primaries': ['name', 'perfIndex', 'category', 'rivenDisposition', 'dmg', 'mr', 'expand'],
  'secondaries': ['name', 'perfIndex', 'category', 'rivenDisposition', 'dmg', 'mr', 'expand'],
  'melees': ['name', 'perfIndex', 'category', 'rivenDisposition', 'dmg', 'mr', 'expand']
};
