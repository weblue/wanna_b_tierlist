import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from '../../services/data.service';
import { FilterParams } from '../../models/FilterParams';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private _tabSub: Subscription;
  faCheck = faCheck;
  faTimes = faTimes;

  filterCategory: 'Primary' | 'Secondary' | 'Melee' | 'Item' | 'Frame';

  //Item
  name: string;
  base: string;

  // tier: 'Top' | 'Contender' | 'Viable' | 'Need buffs' | 'Untested'[];
  tier = new FormControl();
  // buildType: any[];
  buildType = new FormControl();
  // triggerType: any[];
  triggerType = new FormControl();
  //Primary
  // primCategory: 'Shotgun' | 'Rifle' | 'Sniper' | 'Bow' | 'Launcher'[];
  primCategory = new FormControl();
  // munitions: any[];
  munitions = new FormControl();

  mr: number;
  rivenDisp: number;

  constructor(
    private data: DataService
  ) {
    this.filterCategory = "Primary";
    this._tabSub = data.tabChange.subscribe((tab) => {
      switch(tab) {
        case "primaries":
          this.filterCategory = "Primary";
          break;
        case "secondaries":
          this.filterCategory = "Secondary";
          break;
        case "melees":
          this.filterCategory = "Melee";
          break;
        default:
          this.filterCategory = "Item";
      }
    });
  }

  ngOnInit() {
  //  TODO build potential categories
  }

  apply() {
    let filterParams: FilterParams = new FilterParams();

    if (this.name) {
      filterParams.name = this.name;
      console.log(name);
    }

    if (this.mr) {
      filterParams.mr = this.mr;
    }

    // if (this.tier)
    //   filterParams.tier = this.tier;

    // if (this.primCategory && this.filterCategory == 'Primary') {
    //   filterParams.primCategory = this.primCategory;
    // }

    this.data.setFilterParams(filterParams);
  }

  clear() {
    //This needs to clear the fields
    this.data.clearFilters();
  }

}
