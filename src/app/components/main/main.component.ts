import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listVersion: string;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getDb().subscribe((db) => {
      this.listVersion = db.version;
    });
  }

}
