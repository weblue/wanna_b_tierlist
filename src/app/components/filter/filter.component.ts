import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {DataService} from '../../services/data.service';
import {FilterParams} from '../../models/FilterParams';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from "@angular/forms";
import {tierTypes, types} from "../../models/Database";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private _tabSub: Subscription;
  faCheck = faCheck;
  faTimes = faTimes;

  // filterCategory: 'Primary' | 'Secondary' | 'Melee' | 'Item' | 'Frame';
  filterCategory: string;

  //Item
  name: string;
  base: string;

  tier = new FormControl();
  buildType = new FormControl();
  triggerType = new FormControl();
  // tier: 'Top' | 'Contender' | 'Viable' | 'Need buffs' | 'Untested'[];
  // buildType: any[];
  // triggerType: any[];
  // munitions: any[];
  // primCategory: 'Shotgun' | 'Rifle' | 'Sniper' | 'Bow' | 'Launcher'[];

  category = new FormControl();
  munitions = new FormControl();

  mr: number;
  rivenDisp: number;

  munitionTypes: string[];
  buildTypes: string[];
  triggerTypes: string[];
  tierTypes: string[];
  categoryTypes: string[];

  constructor(
    private data: DataService,
  ) {
    this.filterCategory = data.currentTab;
    this.categoryTypes = [];
    this.buildTypes = [];
    this.triggerTypes = [];
    this.munitionTypes = [];

    this.tierTypes = [];
    this.tierTypes = tierTypes;

    this.changeTab(this.filterCategory);

    this._tabSub = data.tabChange.subscribe((tab) => {
      this.changeTab(tab);
    });
  }

  changeTab(tab) {
    switch (tab) {
      case "primaries":
        this.filterCategory = "Primary";
        this.categoryTypes = types.Primaries.categoryTypes;
        this.munitionTypes = types.Primaries.munitionTypes;
        this.buildTypes = types.Primaries.buildTypes;
        this.triggerTypes = types.Primaries.triggerTypes;
        break;
      case "secondaries":
        this.filterCategory = "Secondary";
        this.categoryTypes = [];
        this.munitionTypes = [];
        this.buildTypes = types.Secondaries.buildTypes;
        this.triggerTypes = types.Secondaries.triggerTypes;
        break;
      case "melees":
        this.filterCategory = "Melee";
        this.categoryTypes = [];
        this.munitionTypes = [];
        this.buildTypes = types.Melees.buildTypes;
        this.triggerTypes = types.Melees.triggerTypes;
        break;
      default:
        this.filterCategory = "Item";
    }
  }

  ngOnInit() {
  }

  apply() {
    let filterParams: FilterParams = new FilterParams();

    if (this.name) {
      filterParams.name = this.name;
    }
    if (this.base) {
      filterParams.base = this.base;
    }
    if (this.mr) {
      filterParams.mr = this.mr;
    }
    if (this.rivenDisp) {
      filterParams.rivenDisp = this.rivenDisp;
    }
    if (this.buildType) {
      filterParams.buildType = this.buildType.value;
    }
    if (this.category) {
      filterParams.category = this.category.value;
    }
    if (this.triggerType) {
      filterParams.triggerType = this.triggerType.value;
    }
    if (this.munitions) {
      filterParams.munitions = this.munitions.value;
    }
    this.data.setFilterParams(filterParams);
  }

  clear() {
    this.base = '';
    this.name = '';
    this.mr = null;
    this.rivenDisp = null;
    this.buildType.reset();
    this.triggerType.reset();
    this.category.reset();
    this.munitions.reset();

    this.data.clearFilters();
  }

}
