import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  showSidebarChange: Subject<boolean>;

  constructor() {
    this.showSidebarChange = new Subject<boolean>();
  }

  toggle() {
    this.showSidebarChange.next();
  }
}
