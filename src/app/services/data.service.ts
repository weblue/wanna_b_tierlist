import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Primary} from "../models/Primary";
import {columnDefs, Database} from "../models/Database";
import {Secondary} from "../models/Secondary";
import {Melee} from "../models/Melee";
import {Tier} from "../models/Tier";
import {Item} from "../models/Item";
import {FilterParams} from "../models/FilterParams";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public database: Database;
  private dbUrl = './assets/thelist.json';
  private filterParams: FilterParams;

  dataChange: Subject<null> = new Subject<null>();

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

          this.database.primaries = this.injectTiers(db.Primaries);
          this.database.secondaries = this.injectTiers(db.Secondaries);
          this.database.melees = this.injectTiers(db.Melees);

          return this.database;
        }
      ));
    }
  }

  public setFilterParams(input: FilterParams) {
    this.filterParams = input;
    this.dataChange.next();
  }

  injectTiers(values: any): (Item | Tier)[] {
    let itemArray: Item[] = Object.values(values);
    let items: (Item | Tier)[];
    items = itemArray.sort((a, b) => {
      return a.rank - b.rank;
    });

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

  applyFilter(category: string, items: any[]): (Item | Tier)[] {
    return this.injectTiers(items.filter((item) => {
      let show = true;
      if(this.filterParams) {
        if (this.filterParams.name)
          show = show && item.name.startsWith(this.filterParams.name);
        if (item.mr && this.filterParams.mr && this.filterParams.mrtype)
          switch (this.filterParams.mrtype) {
            case '>':
              show = show && this.filterParams.mr > item.mr;
              break;
            case '<':
              show = show && this.filterParams.mr < item.mr;
              break;
            case '<=':
              show = show && this.filterParams.mr <= item.mr;
              break;
            case '>=':
              show = show && this.filterParams.mr >= item.mr;
              break;
            case '==':
              show = show && this.filterParams.mr == item.mr;
              break;
          }
        if (this.filterParams.rank && this.filterParams.ranktype) {
          switch (this.filterParams.ranktype) {
            case '>':
              show = show && this.filterParams.rank > item.rank;
              break;
            case '<':
              show = show && this.filterParams.rank < item.rank;
              break;
            case '<=':
              show = show && this.filterParams.rank <= item.rank;
              break;
            case '>=':
              show = show && this.filterParams.rank >= item.rank;
              break;
            case '==':
              show = show && this.filterParams.rank == item.rank;
              break;
          }
        }
        if (this.filterParams.type)
          show = show && item.type.startsWith(this.filterParams.type);
        if (this.filterParams.tier)
          show = show && item.tier == this.filterParams.tier;
        if (this.filterParams.primCategory && this.filterParams.filterCategory == 'Primary')
          show = show && item.category.startsWith(this.filterParams.primCategory);
        return show;
      }
    }));
  }

  clearFilters() {
    this.filterParams = new FilterParams();
  }

  getData(tab: string): Observable<Item[]> {
    return this.getDb().pipe<Item[]>(map(db => {
        return this.applyFilter(tab, this.database[tab]);
      })
    );
  }
}

export const topTier: Tier = {name: 'Top', rank: 0, tier: null, isTier: true};
export const contenderTier: Tier = {name: 'Contender', rank: 1, tier: null, isTier: true};
export const viableTier: Tier = {name: 'Viable', rank: 2, tier: null, isTier: true};
export const needsBuffTier: Tier = {name: 'Needs Buffs', rank: 3, tier: null, isTier: true};
export const untestedTier: Tier = {name: 'Untested', rank: 4, tier: null, isTier: true};

