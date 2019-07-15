import {Component, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";

import { NavbarComponent } from './components/navbar/navbar.component';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {Subscription} from "rxjs/internal/Subscription";
import {SidebarService} from "./services/sidebar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tierlist';
  private loading: boolean = true;
  faDiscord = faDiscord;
  faGithub = faGithub;
  faInfoCircle = faInfoCircle;

  opened: boolean;
  private _subscription: Subscription;

  constructor(
    private data: DataService,
    private sideserv: SidebarService
  ) {
    this.opened = sideserv.showSidebar;
    this._subscription = sideserv.showSidebarChange.subscribe((value) => {
      this.opened = value;
    });
  }

  ngOnInit() {
    this.data.getDb().subscribe(() => this.loading = false);
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }
}
