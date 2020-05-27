export class FilterParams {
  //Item
  name: string;
  base: string;

  mr: number;
  rivenDisp: number;

  buildType: any[];
  triggerType: any[];
  category: any[];
  tier: 'Top' | 'Contender' | 'Viable' | 'Need buffs' | 'Untested'[];

  munitions: any[];

  constructor() {

  }
}
