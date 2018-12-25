import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private database;
  private dbUrl = './assets/thelist.json';

  constructor(private http: HttpClient
  ) {

  }

  public initDb(): Observable<Object> {
    return this.http.get(this.dbUrl).pipe<any>(map(db => {
        //nothing yet
      }
    ));
  }

  public getDb(name: string): any {
    return this.database[name];
  }
}
