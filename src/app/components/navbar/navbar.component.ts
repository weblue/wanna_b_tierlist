import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { map } from "rxjs/operators";

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listVersion: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getDb().subscribe(db => this.listVersion = db.version);
  }



}
