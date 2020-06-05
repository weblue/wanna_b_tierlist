import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'card-contents',
  templateUrl: './card-contents.component.html',
  styleUrls: ['./card-contents.component.css']
})
export class CardContentsComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
