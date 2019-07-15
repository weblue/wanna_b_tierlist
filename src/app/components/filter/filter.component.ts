import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from '../../services/data.service';
import { FilterParams } from '../../models/FilterParams';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private _tabSub: Subscription;
  faCheck = faCheck;
  faTimes = faTimes;

  filterCategory: 'Primary' | 'Secondary' | 'Melee' | 'Item';

  //Item
  name: string;
  // rank: number;
  // ranktype: '>' | '<' | '<=' | '>=' | '==';
  mr: number;
  mrtype: '>' | '<' | '<=' | '>=' | '==';
  tier: 'Top' | 'Contender' | 'Viable' | 'Need buffs' | 'Untested';
  type: string;

  //Primary
  primCategory = {
    Shotgun: false,
    Rifle: false,
    Sniper: false,
    Bow: false,
    Launcher: false
  };

  constructor(
    private data: DataService
  ) {
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
  }

  apply() {
    let filterParams: FilterParams = new FilterParams();

    if (this.name) {
      filterParams.name = this.name;
      console.log(name);
    }

    /*if (this.rank && this.ranktype) {
      filterParams.rank = this.rank;
      filterParams.ranktype = this.ranktype;
    }*/

    if (this.mr && this.mrtype) {
      filterParams.mr = this.mr;
      filterParams.mrtype = this.mrtype;
    }

    if (this.type)
      filterParams.type = this.type;

    if (this.tier)
      filterParams.tier = this.tier;

    if (this.primCategory && this.filterCategory == 'Primary') {
      filterParams.primCategory = this.primCategory;
    }

    this.data.setFilterParams(filterParams);
  }

  clear() {
    //This needs to clear the fields
    this.name = '';
    // this.rank = null;
    // this.ranktype = null;
    this.mr = null;
    this.mrtype = null;
    this.type = '';
    this.primCategory = null;

    this.data.clearFilters();
  }

}
