import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listVersion: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.initDb().subscribe(() => this.listVersion = this.dataService.getDb("version"));
  }

}
