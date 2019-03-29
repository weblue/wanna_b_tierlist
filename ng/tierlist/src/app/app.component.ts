import {Component, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";

import { NavbarComponent } from './components/navbar/navbar.component';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.getDb().subscribe(() => this.loading = false);
  }
}
