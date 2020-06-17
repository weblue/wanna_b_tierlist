import { Injectable } from '@angular/core';
import {primBuildTypes, primCategories, primMunitionTypes, primTriggerTypes} from "../models/Primary";
import {tierTypes} from "../models/Database";
import {Subscription} from "rxjs";
import {DataService} from "./data.service";
import {FilterParams} from "../models/FilterParams";
import {secBuildTypes, secCategories, secMunitionTypes, secTriggerTypes} from "../models/Secondary";
import {meleeBuildTypes, meleeCategories} from "../models/Melee";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private _tabSub: Subscription;

  filterCategory: string;

  //Strings
  name: string;
  base: string;

  //Numbers
  mr: number;
  rivenDisp: number;

  munitionChoices: string[];
  buildChoices: string[];
  triggerChoices: string[];
  tierChoices: string[];
  categoryChoices: string[];

  //Arrays
  munitionTypes: string[];
  buildTypes: string[];
  triggerTypes: string[];
  tierTypes: string[];
  categoryTypes: string[];

  constructor(
    private data: DataService
  ) {
    this.tierTypes = tierTypes;

    this._tabSub = data.notifyTabListener.subscribe((tab) => {
      this.changeTab(tab);
    });
  }

  changeTab(tab) {
    console.log('filter service: change tab ' + tab);
    switch (tab) {
      case "primaries":
        this.filterCategory = "Primary";
        this.categoryTypes = Object.values(primCategories);
        this.munitionTypes = Object.values(primMunitionTypes);
        this.buildTypes = Object.values(primBuildTypes);
        this.triggerTypes = Object.values(primTriggerTypes);
        break;
      case "secondaries":
        this.filterCategory = "Secondary";
        this.categoryTypes = Object.values(secCategories);
        this.munitionTypes = Object.values(secMunitionTypes);
        this.buildTypes = Object.values(secBuildTypes);
        this.triggerTypes = Object.values(secTriggerTypes);
        break;
      case "melees":
        this.filterCategory = "Melee";
        this.categoryTypes = meleeCategories;
        this.munitionTypes = [];
        this.buildTypes = meleeBuildTypes;
        this.triggerTypes = [];
        break;
      default:
        this.filterCategory = "Item";
    }
  }

  clear() {
    this.base = '';
    this.name = '';

    this.mr = null;
    this.rivenDisp = null;

    this.munitionChoices = [];
    this.categoryChoices = [];
    this.triggerChoices = [];
    this.buildChoices = [];
    this.tierChoices = [];

    this.data.clearFilters();
  }

  apply(params: FilterParams) {
    this.data.setFilterParams(params);
  }
}
