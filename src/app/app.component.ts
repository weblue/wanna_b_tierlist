import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";

import {Subscription} from "rxjs/internal/Subscription";
import {SidebarService} from "./services/sidebar.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FilterComponent} from "./components/filter/filter.component";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loading: boolean = true;

  private _subscription: Subscription;

  private dialogRef;

  faUpArrow = faArrowUp;

  toTop = document.getElementById("toTop");

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

      this.dialogRef = this.dialog.open(FilterComponent, {});
    });
  }

  ngOnInit() {
    this.data.getDb().subscribe((db) => {
      this.loading = false;
    });

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.toTop.style.display = "block";
      } else {
        this.toTop.style.display = "none";
      }
    };
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
