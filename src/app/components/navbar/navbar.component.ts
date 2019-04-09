import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { map } from "rxjs/operators";

import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listVersion: string;
  faGithub = faGithub;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDb().subscribe(db => this.listVersion = db.version);
  }

}
