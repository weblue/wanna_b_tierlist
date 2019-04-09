import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Disclaimer } from '../../models/Disclaimer';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-disclaimers',
  templateUrl: './disclaimers.component.html',
  styleUrls: ['./disclaimers.component.css']
})
export class DisclaimersComponent implements OnInit {

  disclaimers: Array<Disclaimer>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDb().subscribe(db => {
      this.disclaimers = Object.keys(db.disclaimers).map(function(key) {
        return db.disclaimers[key];
      });
    });
  }

}
