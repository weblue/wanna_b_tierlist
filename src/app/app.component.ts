import {Component, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";

import {Subscription} from "rxjs/internal/Subscription";
import {SidebarService} from "./services/sidebar.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FilterComponent} from "./components/filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loading: boolean = true;

  private _subscription: Subscription;

  private dialogRef;

  constructor(
    private data: DataService,
    private sideserv: SidebarService,
    public dialog: MatDialog
  ) {
    this._subscription = sideserv.showSidebarChange.subscribe(() => {
      if (this.dialogRef) {
        this.dialog.closeAll();
        this.dialogRef = null;
      }

      this.dialogRef = this.dialog.open(FilterComponent, {
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
