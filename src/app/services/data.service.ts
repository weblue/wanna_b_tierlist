import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Database, types} from "../models/Database";
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

  private filterParams: FilterParams;
  currentTab: string;

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

        //TODO check for other categories that are missing
        for (let item in db.Primaries) {
          if (!types.Primaries.categoryTypes.includes(db.Primaries[item].category))
            types.Primaries.categoryTypes.push(db.Primaries[item].category);

          if (!types.Primaries.buildTypes.includes(db.Primaries[item].dmg))
            types.Primaries.buildTypes.push(db.Primaries[item].dmg);

          if (!types.Primaries.triggerTypes.includes(db.Primaries[item].type)) {
            types.Primaries.triggerTypes.push(db.Primaries[item].type);
          }

          if (!types.Primaries.munitionTypes.includes(db.Primaries[item].munitions))
            types.Primaries.munitionTypes.push(db.Primaries[item].munitions);
        }
        for (let item in db.Secondaries) {
          if (!types.Secondaries.categoryTypes.includes(db.Secondaries[item].category))
            types.Secondaries.categoryTypes.push(db.Secondaries[item].category);

          if (!types.Secondaries.buildTypes.includes(db.Secondaries[item].dmg)) {
            types.Secondaries.buildTypes.push(db.Secondaries[item].dmg);
          }

          if (!types.Secondaries.triggerTypes.includes(db.Secondaries[item].type)) {
            types.Secondaries.triggerTypes.push(db.Secondaries[item].type);
          }
        }

        for (let item in db.Melees) {
          if (!types.Melees.buildTypes.includes(db.Melees[item].dmg))
            types.Melees.buildTypes.push(db.Melees[item].dmg);

          if (!types.Melees.triggerTypes.includes(db.Melees[item].type))
            types.Melees.triggerTypes.push(db.Melees[item].type);
        }

        return this.database;
      }
    ));
  }

  getTabData(tab: string): Observable<(Item | Tier)[]> {
    this.currentTab = tab;
    this.notifyTabListener.next(tab);
    return this.getDb().pipe<(Item | Tier)[]>(map(db => {
        return this.applyFilter(this.database[tab]);
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

  public setFilterParams(input: FilterParams) {
    console.log(input);
    this.filterParams = input;
    this.getTabData(this.currentTab);
    this.dataChange.next();
  }

  public getCurFilterParams() {
    return this.filterParams;
  }

  clearFilters() {
    this.filterParams = new FilterParams();
    this.setFilterParams(this.filterParams);
  }

  private applyFilter(items: any[]): (Item | Tier)[] {
    console.log(this.filterParams.buildType);
    return DataService.injectTiers(items.filter((item) => {
      let show = true;
      if (item.name && this.filterParams.name) {
        show = show && item.name.toLowerCase().startsWith(this.filterParams.name.toLowerCase());
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
      if (item.category && this.filterParams.category) {
        let match = false;
        this.filterParams.category.forEach((category) => {
          if (item.category === category)
            match = true;
        });
        show = show && match;
      }
      if (item.munitions && this.filterParams.munitions) {
        let match = false;
        this.filterParams.munitions.forEach((munition) => {
          if (item.munitions === munition)
            match = true;
        });
        show = show && match;
      }
      if (item.triggerType && this.filterParams.triggerType) {
        let match = false;
        this.filterParams.triggerType.forEach((triggerType) => {
          if (item.triggerType === triggerType)
            match = true;
        });
        show = show && match;
      }
      if (item.dmg && this.filterParams.buildType) {
        let match = false;
        this.filterParams.buildType.forEach((buildType) => {
          if (item.dmg === buildType)
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

