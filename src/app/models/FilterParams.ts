export class FilterParams {
    //Item
    name: string;
    // rank: number;
    // ranktype: '>' | '<' | '<=' | '>=' | '==';
    mr: number;
    mrtype: '>' | '<' | '<=' | '>=' | '==';
    tier: 'Top' | 'Contender' | 'Viable' | 'Need buffs' | 'Untested';
    type: string;

    //Primary
    primCategory: {
        Shotgun: boolean,
        Rifle: boolean,
        Sniper: boolean,
        Bow: boolean,
        Launcher: boolean
    };
}
