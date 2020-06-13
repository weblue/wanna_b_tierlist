import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";

import {Subscription} from "rxjs/internal/Subscription";
import {SidebarService} from "./services/sidebar.service";
import {MatDialog} from "@angular/material/dialog";
import {FilterComponent} from "./components/filter/filter.component";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {NgcCookieConsentService} from "ngx-cookieconsent";
import {Router, NavigationEnd} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {FilterService} from "./services/filter.service";

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _subscription: Subscription;

  private dialogRef;

  faUpArrow = faArrowUp;
  toTop = document.getElementById("toTop");

  constructor(
    private data: DataService,
    private sideServ: SidebarService,
    public dialog: MatDialog,
    public router: Router,
    public filter: FilterService
  ) {
    this._subscription = sideServ.showSidebarChange.subscribe(() => {
      if (this.dialogRef) {
        this.dialog.closeAll();
        this.dialogRef = null;
      }

      this.dialogRef = this.dialog.open(FilterComponent, {});
    });

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        gtag('config', 'UA-109524715-1',
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    });
  }

  ngOnInit() {
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
