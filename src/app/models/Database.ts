import {Alert} from "./Alert";
import {Archwing} from "./Archwing";
import {Archgun} from "./Archgun";
import {Archmelee} from "./Archmelee";
import {Companion} from "./Companion";
import {Disclaimer} from "./Disclaimer";
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
  alerts: Alert[];
  disclaimers: Disclaimer[];
  faq: Disclaimer[];
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

export const tierTypes = ['Top', 'Contender', 'Viable', 'Need buffs', 'Untested'];

export const types = {
  'Primaries': {
    categoryTypes: [],
    buildTypes: [],
    triggerTypes: [],
    munitionTypes: []
  },
  'Secondaries': {
    categoryTypes: [],
    buildTypes: [],
    triggerTypes: [],
  },
  'Melees': {
    buildTypes: [],
    triggerTypes: [],
  }
};

export const columnDefs = {
  //TODO add munitions to model
  'primaries': ['name', 'category', 'type', 'munitions', 'dmg', 'mr', 'perfIndex', 'rivenDisposition', 'base', 'expand'],
  'secondaries': ['name', 'category', 'type', 'dmg', 'mr', 'perfIndex', 'rivenDisposition', 'base', 'expand'],
  'melees': ['name', 'type', 'dmg', 'mr', 'perfIndex', 'base', 'wepnotes', 'expand']
};
