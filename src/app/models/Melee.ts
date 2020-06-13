import {Item} from "./Item";

export class Melee extends Item{
  base: string;
  category: string;
  combo: string;
  dmg: string;
  mr: number;
  stance: string;
  notes: string;
}
//TODO these

export enum meleeCategories {
  SHOTGUN = 'Shotgun',
  RIFLE = 'Rifle',
  SNIPER = 'Sniper',
  BOW = 'Bow',
  LAUNCHER = 'Launcher'
}

export enum meleeBuildTypes {
  CRIT_STATUS = 'Crit & Status',
  STATUS = 'Status',
  CRITICAL = 'Critical',
  RAW = 'Raw'
}
