import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { map } from "rxjs/operators";
import {Primary} from "../models/Primary";
import {Database} from "../models/Database";
import {Secondary} from "../models/Secondary";
import {Melee} from "../models/Melee";

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

          let primArray:Primary[] = Object.values(db.Primaries);
          this.database.primaries = primArray.sort((a, b) => {
            return a.rank - b.rank;
          });

          let secArray:Secondary[] = Object.values(db.Secondaries);
          this.database.secondaries = secArray.sort((a, b) => {
            return a.rank - b.rank;
          });

          let melArray:Melee[] = Object.values(db.Melees);
          this.database.melees = melArray.sort((a, b) => {
            return a.rank - b.rank;
          });

          return this.database;
        }
      ));
    }
  }
}
