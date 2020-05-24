import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { map } from "rxjs/operators";

import {faInfoCircle, faSearch} from '@fortawesome/free-solid-svg-icons';
import {SidebarService} from "../../services/sidebar.service";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listVersion: string;

  faDiscord = faDiscord;
  faGithub = faGithub;
  faInfoCircle = faInfoCircle;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getDb().subscribe(db => this.listVersion = db.version);
  }



}
