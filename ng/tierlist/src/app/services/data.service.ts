import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Primary} from "../models/Primary";
import {Database} from "../models/Database";
import {Secondary} from "../models/Secondary";
import {Melee} from "../models/Melee";
import {Tier} from "../models/Tier";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public database: Database;
  private dbUrl = './assets/thelist.json';

  constructor(
    private http: HttpClient
  ) {

  }

  //Return or request the db
  public getDb(): Observable<Database> {
    if (this.database) {
      return of(this.database);
    } else {
      return this.http.get<Database>(this.dbUrl).pipe<Database>(map(db => {
          this.database = db;

          let primArray: Primary[] = Object.values(db.Primaries);
          this.database.primaries = primArray.sort((a, b) => {
            return a.rank - b.rank;
          });

          //Maybe make this a helper function?
          //Inject the tier lines
          let contAdded = false;
          let viaAdded = false;
          let nbAdded = false;
          let utAdded = false;

          this.database.primaries.splice(0, 0, topTier);
          for (let i = 0; i < this.database.primaries.length; i++) {
            if (this.database.primaries[i].tier === 'Contender' && !contAdded) {
              this.database.primaries.splice(i, 0, contenderTier);
              contAdded = true;
            } else if (this.database.primaries[i].tier === 'Viable' && !viaAdded) {
              this.database.primaries.splice(i, 0, viableTier);
              viaAdded = true;
            } else if (this.database.primaries[i].tier === 'Need buffs' && !nbAdded) {
              this.database.primaries.splice(i, 0, needsBuffTier);
              nbAdded = true;
            } else if (this.database.primaries[i].tier === 'Untested' && !utAdded) {
              this.database.primaries.splice(i, 0, untestedTier);
              utAdded = true;
            }
          }

          let secArray: Secondary[] = Object.values(db.Secondaries);
          this.database.secondaries = secArray.sort((a, b) => {
            return a.rank - b.rank;
          });

          //Inject the tier lines
          contAdded = false;
          viaAdded = false;
          nbAdded = false;
          utAdded = false;

          this.database.secondaries.splice(0, 0, topTier);
          for (let i = 0; i < this.database.secondaries.length; i++) {
            if (this.database.secondaries[i].tier === 'Contender' && !contAdded) {
              this.database.secondaries.splice(i, 0, contenderTier);
              contAdded = true;
            } else if (this.database.secondaries[i].tier === 'Viable' && !viaAdded) {
              this.database.secondaries.splice(i, 0, viableTier);
              viaAdded = true;
            } else if (this.database.secondaries[i].tier === 'Need buffs' && !nbAdded) {
              this.database.secondaries.splice(i, 0, needsBuffTier);
              nbAdded = true;
            } else if (this.database.secondaries[i].tier === 'Untested' && !utAdded) {
              this.database.secondaries.splice(i, 0, untestedTier);
              utAdded = true;
            }
          }

          let melArray: Melee[] = Object.values(db.Melees);
          this.database.melees = melArray.sort((a, b) => {
            return a.rank - b.rank;
          });

          //Inject the tier lines
          contAdded = false;
          viaAdded = false;
          nbAdded = false;
          utAdded = false;

          this.database.melees.splice(0, 0, topTier);
          for (let i = 0; i < this.database.melees.length; i++) {
            if (this.database.melees[i].tier === 'Contender' && !contAdded) {
              this.database.melees.splice(i, 0, contenderTier);
              contAdded = true;
            } else if (this.database.melees[i].tier === 'Viable' && !viaAdded) {
              this.database.melees.splice(i, 0, viableTier);
              viaAdded = true;
            } else if (this.database.melees[i].tier === 'Need buffs' && !nbAdded) {
              this.database.melees.splice(i, 0, needsBuffTier);
              nbAdded = true;
            } else if (this.database.melees[i].tier === 'Untested' && !utAdded) {
              this.database.melees.splice(i, 0, untestedTier);
              utAdded = true;
            }
          }

          return this.database;
        }
      ));
    }
  }
}

export const topTier: Tier = {name: 'Top', rank: 0, tier: null, isTier: true};
export const contenderTier: Tier = {name: 'Contender', rank: 1, tier: null, isTier: true};
export const viableTier: Tier = {name: 'Viable', rank: 2, tier: null, isTier: true};
export const needsBuffTier: Tier = {name: 'Needs Buffs', rank: 3, tier: null, isTier: true};
export const untestedTier: Tier = {name: 'Untested', rank: 4, tier: null, isTier: true};

