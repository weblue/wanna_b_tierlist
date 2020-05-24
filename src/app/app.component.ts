import {Component, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";

import {Subscription} from "rxjs/internal/Subscription";
import {SidebarService} from "./services/sidebar.service";
import {MatDialog} from "@angular/material/dialog";
import {FilterComponent} from "./components/filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tierlist';
  listVersion: string;
  private loading: boolean = true;

  opened: boolean;
  private _subscription: Subscription;

  constructor(
    private data: DataService,
    private sideserv: SidebarService,
    public dialog: MatDialog
  ) {
    this.opened = sideserv.showSidebar;
    this._subscription = sideserv.showSidebarChange.subscribe((value) => {
      this.opened = value;
      const dialogRef = this.dialog.open(FilterComponent, {
        width: '250px'
      });
    });
  }

 /* openDialog(): void {


    /!*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*!/
  }*/

  ngOnInit() {
    this.data.getDb().subscribe((db) => {
      this.loading = false; 
      this.listVersion = db.version;
    });
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }
}
