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
  private loading: boolean = true;

  private _subscription: Subscription;

  constructor(
    private data: DataService,
    private sideserv: SidebarService,
    public dialog: MatDialog
  ) {
    this._subscription = sideserv.showSidebarChange.subscribe((value) => {
      const dialogRef = this.dialog.open(FilterComponent, {
        width: '250px'
      });
    });
  }

  ngOnInit() {
    this.data.getDb().subscribe((db) => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }
}
