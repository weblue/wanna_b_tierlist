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

export enum primCategories {
  SHOTGUN = 'Shotgun',
  RIFLE = 'Rifle',
  SNIPER = 'Sniper',
  BOW = 'Bow',
  LAUNCHER = 'Launcher'
}

export enum primBuildTypes {
  CRIT_STATUS = 'Crit & Status',
  STATUS = 'Status',
  CRITICAL = 'Critical',
  RAW = 'Raw'
}

export enum primTriggerTypes {
  FULL_AUTO = 'Full-auto',
  HELD = 'Held',
  SEMI_AUTO = 'Semi-auto',
  FORCE_CHARGE = 'Force charge',
  FULL_AUTO_BURST = 'Full-auto burst',
  BURST = 'Burst',
  CHARGE = 'Charge',
  DETONATE = 'Detonate',
  THROW = 'Throw',
  SPOOL_UP = 'Spool-up',
  MAG_BURST = 'Mag burst',
  DUPLEX = 'Duplex',
}

export enum primMunitionTypes {
  PROJECTILE = 'Projectile',
  BEAM = 'Beam',
  HITSCAN = 'Hitscan'
}
