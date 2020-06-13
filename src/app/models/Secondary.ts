export class Secondary {
  base: string;
  dmg: string;
  mr: number;
  rivenDisposition: number;
  name: string;
  notes: string;
  rank: number;
  tier: string;
  type: string;
  url: string;
}
//TODO these

export enum secCategories {
  SHOTGUN = 'Shotgun',
  RIFLE = 'Rifle',
  SNIPER = 'Sniper',
  BOW = 'Bow',
  LAUNCHER = 'Launcher'
}

export enum secBuildTypes {
  CRIT_STATUS = 'Crit & Status',
  STATUS = 'Status',
  CRITICAL = 'Critical',
  RAW = 'Raw'
}

export enum secTriggerTypes {
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

export enum secMunitionTypes {
  PROJECTILE = 'Projectile',
  BEAM = 'Beam',
  HITSCAN = 'Hitscan'
}
