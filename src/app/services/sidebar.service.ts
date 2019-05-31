import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  showSidebar: boolean;
  showSidebarChange: Subject<boolean>;

  constructor() {
    this.showSidebar = false;
    this.showSidebarChange = new Subject<boolean>();
  }

  toggle() {
    this.showSidebar = !this.showSidebar;
    this.showSidebarChange.next(this.showSidebar);
  }
}
