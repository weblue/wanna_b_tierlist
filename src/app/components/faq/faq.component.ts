import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FAQPoint } from '../../models/FAQPoint';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: Array<FAQPoint>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDb().subscribe(db => {
      this.faqs = Object.keys(db.faq).map(function(key) {
        return db.faq[key];
      });
    });
  }

}
