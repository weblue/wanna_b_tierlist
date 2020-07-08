import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {DataService} from "./data.service";
import {Observable} from "rxjs";
import {Database} from "../models/Database";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DbResolverService implements Resolve<Database> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Database> {
    return this.dataService.getDb();
  }
}
