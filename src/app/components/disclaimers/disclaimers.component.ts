import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FAQPoint } from '../../models/FAQPoint';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-disclaimers',
  templateUrl: './disclaimers.component.html',
  styleUrls: ['./disclaimers.component.css']
})
export class DisclaimersComponent implements OnInit {

  disclaimers: Array<FAQPoint>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

}
