import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Disclaimer } from '../../models/Disclaimer';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: Array<Disclaimer>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDb().subscribe(db => {
      this.faqs = Object.keys(db.faq).map(function(key) {
        return db.faq[key];
      });
    });
  }

}
