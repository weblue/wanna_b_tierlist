import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { map } from "rxjs/operators";
import {Primary} from "../models/Primary";
import {Database} from "../models/Database";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public database: Database;
  private dbUrl = './assets/thelist.json';

  private primaries: Primary[];

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
          this.primaries = db.primaries;
          return db;
        }
      ));
    }
  }
}
