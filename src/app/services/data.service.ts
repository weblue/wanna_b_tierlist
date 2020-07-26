import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Database} from "../models/Database";
import {Tier} from "../models/Tier";
import {Item} from "../models/Item";
import {FilterParams} from "../models/FilterParams";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public database: Database;
  dataChange: Subject<null> = new Subject<null>();
  notifyTabListener: Subject<string> = new Subject<string>();

  private dbUrl = './assets/thelist.json';
  public loading: boolean;

  public filterParams: FilterParams = new FilterParams();

  currentTab: string;
  Secondaries = {
    categoryTypes: [],
    buildTypes: [],
    triggerTypes: [],
    munitionTypes: []
  };
  Melees = {
    buildTypes: [],
    categoryTypes: []
  };
  Primaries = {
    triggerTypes: [],
    buildTypes: [],
    categoryTypes: [],
    munitionTypes: []

  };

  constructor(
    private http: HttpClient
  ) {
    this.filterParams = new FilterParams();
  }

  //Return or request the db
  public getDb(): Observable<Database> {
    if (this.database) {
      return of(this.database);
    }

    return this.http.get<Database>(this.dbUrl).pipe<Database>(map(db => {
        this.database = db;

        this.database.primaries = DataService.sort(db.Primaries);
        this.database.secondaries = DataService.sort(db.Secondaries);
        this.database.melees = DataService.sort(db.Melees);

        // This debug code will print all the filtered weapon field types

        // for (let item in db.Primaries) {
        //   if (!this.Primaries.categoryTypes.includes(db.Primaries[item].category))
        //     this.Primaries.categoryTypes.push(db.Primaries[item].category);
        //
        //   if (!this.Primaries.buildTypes.includes(db.Primaries[item].dmg))
        //     this.Primaries.buildTypes.push(db.Primaries[item].dmg);
        //
        //   if (!this.Primaries.triggerTypes.includes(db.Primaries[item].type) && !db.Primaries[item].type.includes('/')) {
        //     this.Primaries.triggerTypes.push(db.Primaries[item].type);
        //   }
        //
        //   if (!this.Primaries.munitionTypes.includes(db.Primaries[item].munitions) && !db.Primaries[item].munitions.includes('/'))
        //     this.Primaries.munitionTypes.push(db.Primaries[item].munitions);
        // }
        // console.log(this.Primaries);

        // for (let item in db.Secondaries) {
        //   if (!this.Secondaries.categoryTypes.includes(db.Secondaries[item].category))
        //     this.Secondaries.categoryTypes.push(db.Secondaries[item].category);
        //
        //   if (!this.Secondaries.buildTypes.includes(db.Secondaries[item].dmg)) {
        //     this.Secondaries.buildTypes.push(db.Secondaries[item].dmg);
        //   }
        //
        //   if (!this.Secondaries.triggerTypes.includes(db.Secondaries[item].type) && !db.Secondaries[item].type.includes('/')) {
        //     this.Secondaries.triggerTypes.push(db.Secondaries[item].type);
        //   }
        //
        //   if (!this.Secondaries.munitionTypes.includes(db.Secondaries[item].munitions) && !db.Secondaries[item].munitions.includes('/')) {
        //     this.Secondaries.munitionTypes.push(db.Secondaries[item].munitions);
        //   }
        // }
        // console.log(this.Secondaries);

        // for (let item in db.Melees) {
        //   if (!this.Melees.buildTypes.includes(db.Melees[item].dmg))
        //     this.Melees.buildTypes.push(db.Melees[item].dmg);
        //
        //   if (!this.Melees.categoryTypes.includes(db.Melees[item].category))
        //     this.Melees.categoryTypes.push(db.Melees[item].category);
        // }
      // console.log(this.Melees);

        return this.database;
      }
    ));
  }

  getTabData(tab: string): Observable<(Item | Tier)[]> {
    this.currentTab = tab;
    this.notifyTabListener.next(tab);
    return this.getDb().pipe<(Item | Tier)[]>(map(db => {
        return this.applyFilter(db[tab]);
      })
    );
  }

  static sort(values: any): (Item | Tier)[] {
    let itemArray: Item[] = Object.values(values);
    let items: (Item | Tier)[];
    items = itemArray.sort((a, b) => {
      return a.rank - b.rank;
    });

    return items;
  }

  static injectTiers(values: any): (Item | Tier)[] {
    let items = DataService.sort(values);
    //Inject the tier lines
    let topAdded = false;
    let contAdded = false;
    let viaAdded = false;
    let nbAdded = false;
    let utAdded = false;

    for (let i = 0; i < items.length; i++) {
      if (items[i].tier === 'Top' && !topAdded) {
        items.splice(i, 0, topTier);
        topAdded = true;
      } else if (items[i].tier === 'Contender' && !contAdded) {
        items.splice(i, 0, contenderTier);
        contAdded = true;
      } else if (items[i].tier === 'Viable' && !viaAdded) {
        items.splice(i, 0, viableTier);
        viaAdded = true;
      } else if (items[i].tier === 'Need buffs' && !nbAdded) {
        items.splice(i, 0, needsBuffTier);
        nbAdded = true;
      } else if (items[i].tier === 'Untested' && !utAdded) {
        items.splice(i, 0, untestedTier);
        utAdded = true;
      }
    }

    return items;
  }

  //TODO subscribe to this and add a loading screen
  public setFilterParams(input: FilterParams) {
    // console.log(JSON.stringify(input));
    this.filterParams = input;
    // this.getTabData(this.currentTab);
    let promise = this.getDb().pipe<(Item | Tier)[]>(map(db => {
        return this.applyFilter(db[this.currentTab]);
      })
    );

    promise.subscribe(() => {
      this.dataChange.next();
    });
    return promise;
  }

  public getCurFilterParams() {
    return this.filterParams;
  }

  clearFilters() {
    this.setFilterParams(new FilterParams());
  }

  private applyFilter(items: any[]): (Item | Tier)[] {
    return DataService.injectTiers(items.filter((item) => {
      let show = true;
      if (item.name && this.filterParams.name) {
        show = show && item.name.toLowerCase().includes(this.filterParams.name.toLowerCase());
      }
      if (item.base && this.filterParams.base) {
        show = show && item.base.toLowerCase().includes(this.filterParams.base.toLowerCase());
      }
      if (item.mr && this.filterParams.mr)
        show = show && this.filterParams.mr >= item.mr;
      if (item.rivenDisp && this.filterParams.rivenDisp)
        show = show && this.filterParams.rivenDisp <= item.rivenDisp;

      if (item.tier && this.filterParams.tier) {
        let match = false;
        this.filterParams.tier.forEach((tier) => {
          if (item.tier === tier)
            match = true;
        });

        show = show && match;
      }
      if (item.category && this.filterParams.category && this.filterParams.category.length > 0) {
        let match = false;
        this.filterParams.category.forEach((category) => {
          if (item.category.includes(category))
            match = true;
        });
        show = show && match;
      }
      if (item.munitions && this.filterParams.munitions && this.filterParams.munitions.length > 0) {
        let match = false;
        this.filterParams.munitions.forEach((munition) => {
          if (item.munitions.includes(munition))
            match = true;
        });
        show = show && match;
      }
      if (item.triggerType && this.filterParams.triggerType && this.filterParams.triggerType.length > 0) {
        let match = false;
        this.filterParams.triggerType.forEach((triggerType) => {
          if (item.triggerType.includes(triggerType))
            match = true;
        });
        show = show && match;
      }
      if (item.dmg && this.filterParams.buildType && this.filterParams.buildType.length > 0) {
        let match = false;
        this.filterParams.buildType.forEach((buildType) => {
          if (item.dmg.includes(buildType))
            match = true;
        });
        show = show && match;
      }

      return show;
    }));
  }
}

export const topTier: Tier = {name: 'Top', rank: 0, tier: null, isTier: true};
export const contenderTier: Tier = {name: 'Contender', rank: 1, tier: null, isTier: true};
export const viableTier: Tier = {name: 'Viable', rank: 2, tier: null, isTier: true};
export const needsBuffTier: Tier = {name: 'Need Buffs', rank: 3, tier: null, isTier: true};
export const untestedTier: Tier = {name: 'Untested', rank: 4, tier: null, isTier: true};

