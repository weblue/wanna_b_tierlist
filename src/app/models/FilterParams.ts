export class FilterParams {
  filterCategory: 'Primary' | 'Secondary' | 'Melee';

  //Item
  name: string;
  rank: number;
  ranktype: '>' | '<' | '<=' | '>=' | '==';
  mr: number;
  mrtype: '>' | '<' | '<=' | '>=' | '==';
  tier: 'Top' | 'Contender' | 'Viable' | 'Needs Buffs' | 'Untested';
  type: string;

  //Primary
  primCategory: ('Shotgun' | 'Rifle' | 'Sniper' | 'Bow' | 'Launcher')[];
}
