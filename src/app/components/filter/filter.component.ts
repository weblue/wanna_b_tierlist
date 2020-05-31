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
//TODO this needs more bug testing
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
    if (this.data.getCurFilterParams()) {
      let filterParams = this.data.getCurFilterParams();

      if (filterParams.base)
        this.base = filterParams.base;
      else
        this.base = '';
      if (filterParams.name)
        this.name = filterParams.name;
      else
        this.name = '';

      if (filterParams.mr)
        this.mr = filterParams.mr;
      else
        this.mr = null;
      if (filterParams.rivenDisp)
        this.rivenDisp = filterParams.rivenDisp;
      else
        this.rivenDisp = null;

      if (filterParams.tier)
        this.tier.setValue(filterParams.tier);
      else
        this.tier.reset();
      if (filterParams.buildType)
        this.buildType.setValue(filterParams.buildType);
      else
        this.buildType.reset();
      if (filterParams.triggerType)
        this.triggerType.setValue(filterParams.triggerType);
      else
        this.triggerType.reset();
      if (filterParams.category)
        this.category.setValue(filterParams.category);
      else
        this.category.reset();
      if (filterParams.munitions)
        this.munitions.setValue(filterParams.munitions);
      else
        this.munitions.reset();

    } else {
      this.base = '';
      this.name = '';
      this.mr = null;
      this.rivenDisp = null;
      this.buildType.reset();
      this.triggerType.reset();
      this.category.reset();
      this.munitions.reset();
    }

    this.tierTypes = tierTypes;

    this.filterCategory = data.currentTab;
    this.changeTab(this.filterCategory);

    this._tabSub = data.notifyTabListener.subscribe((tab) => {
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
    if (this.tier) {
      filterParams.tier = this.tier.value;
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
