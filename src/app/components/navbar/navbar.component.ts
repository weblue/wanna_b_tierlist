import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { map } from "rxjs/operators";

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listVersion: string;
  faBars = faBars;
  faGithub = faGithub;

  constructor(private dataService: DataService, private sideserv: SidebarService) {}

  ngOnInit() {
    this.dataService.getDb().subscribe(db => this.listVersion = db.version);
  }

  toggleSidebar() {
    this.sideserv.toggle();
  }

}
