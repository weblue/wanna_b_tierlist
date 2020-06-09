import {Component, Input, OnInit} from '@angular/core';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'card-contents',
  templateUrl: './card-contents.component.html',
  styleUrls: ['./card-contents.component.css']
})
export class CardContentsComponent implements OnInit {
  @Input() item: any;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
