import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Categories, columnDefs, Database} from "../models/Database";
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
  tabChange: Subject<string> = new Subject<string>();

  private dbUrl = './assets/thelist.json';

  private filterParams: FilterParams;

  constructor(
    private http: HttpClient
  ) {
    this.filterParams = new FilterParams();
  }

  //Return or request the db
  public getDb(): Observable<Database> {
    if (this.database) {
      return of(this.database);
    } else {
      return this.http.get<Database>(this.dbUrl).pipe<Database>(map(db => {
          this.database = db;

          // this.database.primaries = this.injectTiers(db.Primaries);
          this.database.primaries = this.sort(db.Primaries);
          // this.database.secondaries = this.injectTiers(db.Secondaries);
          this.database.secondaries = this.sort(db.Secondaries);
          // this.database.melees = this.injectTiers(db.Melees);
          this.database.melees = this.sort(db.Melees);

          return this.database;
        }
      ));
    }
  }

  getData(tab: string): Observable<(Item | Tier)[]> {
    this.tabChange.next(tab);
    return this.getDb().pipe<(Item | Tier)[]>(map(db => {
        return this.applyFilter(this.database[tab]);
      })
    );
  }

  sort(values: any): (Item | Tier)[] {
    let itemArray: Item[] = Object.values(values);
    let items: (Item | Tier)[];
    items = itemArray.sort((a, b) => {
      return a.rank - b.rank;
    });

    return items;
  }

  injectTiers(values: any): (Item | Tier)[] {
    let items = this.sort(values);

    //Inject the tier lines
    let contAdded = false;
    let viaAdded = false;
    let nbAdded = false;
    let utAdded = false;

    items.splice(0, 0, topTier);
    for (let i = 0; i < items.length; i++) {
      if (items[i].tier === 'Contender' && !contAdded) {
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
    this.filterParams = input;
    this.dataChange.next();
  }

  clearFilters() {
    this.filterParams = new FilterParams();
    this.setFilterParams(this.filterParams);
  }

  private applyFilter(items: any[]): (Item | Tier)[] {
    console.log(this.filterParams);
    return this.injectTiers(items.filter((item) => {
      let show = true;
      if (this.filterParams.name) {
        show = show && item.name.toLowerCase().startsWith(this.filterParams.name.toLowerCase());
      }
      if (item.mr && this.filterParams.mr)
        show = show && this.filterParams.mr >= item.mr;
      // if (this.filterParams.type)
      //     show = show && item.type.toLowerCase().startsWith(this.filterParams.type.toLowerCase());
      if (this.filterParams.tier)
        show = show && item.tier == this.filterParams.tier;
      if (this.filterParams.primCategory) {
        let enabled = false;
        Object.keys(this.filterParams.primCategory).forEach((selCategory) => {
          if (this.filterParams.primCategory[selCategory] && item.category == selCategory) {
            enabled = true;
          }
        });
        show = show && enabled;
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

