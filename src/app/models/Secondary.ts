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

export let secCategories = [
  'Semi-auto',
  'Auto',
  'Beam',
  'Shotgun',
  'Launcher',
  'Crossbow',
  'Thrown',
  'Semi-auto Explosive'
];

export let secBuildTypes = [
  'Status',
  'Critical',
  'Raw',
  'Speed'
];

export let secTriggerTypes = [
  'Full-auto',
  'Held',
  'Semi-auto',
  'Force charge',
  'Full-auto burst',
  'Burst',
  'Charge',
  'Detonate',
  'Throw',
  'Spool-up',
  'Mag burst',
  'Duplex',
];

export let secMunitionTypes = [
  'Projectile',
  'Beam',
  'Hitscan'
];
