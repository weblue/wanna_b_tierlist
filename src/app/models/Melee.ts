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

export let meleeCategories = [
  "Sword and Shield",
  "Staff",
  "Scythe",
  "Fists",
  "Hammer",
  "Whip",
  "Sword",
  "Polearm",
  "Dagger",
  "Glaive",
  "Blade and Whip",
  "Dual Swords",
  "Rapier",
  "Nikana",
  "Dual Daggers",
  "Heavy Blade",
  "Machete",
  "Warfan",
  "Sparring",
  "Tonfa",
  "Nunchaku",
  "Two-handed Nikana",
  "Gunblade",
  "Claws"
];

export let meleeBuildTypes = [
  'Status',
  'Heavy Attack',
  'Hybrid',
  'Critical'
];
