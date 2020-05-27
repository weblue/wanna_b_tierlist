export class FilterParams {
  //Item
  name: string;
  base: string;

  mr: number;
  rivenDisp: number;

  buildType: any[];
  triggerType: any[];
  tier: 'Top' | 'Contender' | 'Viable' | 'Need buffs' | 'Untested'[];

  //Primary
  primCategory: 'Shotgun' | 'Rifle' | 'Sniper' | 'Bow' | 'Launcher'[];
  munitions: any[];

  constructor() {

  }
}
