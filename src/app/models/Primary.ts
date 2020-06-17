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

export let primCategories = [
  'Shotgun',
  'Rifle',
  'Sniper',
  'Bow',
  'Launcher'
];

export let primBuildTypes = [
  'Status',
  'Critical',
  'Raw'
];

export let primTriggerTypes = [
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

export let primMunitionTypes = [
  'Projectile',
  'Beam',
  'Hitscan'
];
