import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FilterParams} from '../../models/FilterParams';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from "@angular/forms";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  faCheck = faCheck;
  faTimes = faTimes;

  // filterCategory: 'Primary' | 'Secondary' | 'Melee' | 'Item' | 'Frame';
  filterCategory: string;

  private filterParams: FilterParams;

  //Strings
  name: string;
  base: string;

  //Numbers
  mr: number;
  rivenDisp: number;

  tierSelect = new FormControl();
  buildSelect = new FormControl();
  triggerSelect = new FormControl();
  categorySelect = new FormControl();
  munitionSelect = new FormControl();

  //Arrays
  munitionTypes: string[];
  buildTypes: string[];
  triggerTypes: string[];
  tierTypes: string[];
  categoryTypes: string[];

  constructor(
    private data: DataService,
    private filter: FilterService,
  ) {

  }

  ngOnInit() {
    this.tierTypes = this.filter.tierTypes;
    this.filterCategory = this.filter.filterCategory;

    if (this.data.getCurFilterParams()) {
      this.filterParams = this.data.getCurFilterParams();

      if (this.filterParams.base)
        this.filter.base = this.filterParams.base;
      else
        this.filter.base = '';
      if (this.filterParams.name)
        this.filter.name = this.filterParams.name;
      else
        this.filter.name = '';

      if (this.filterParams.mr)
        this.filter.mr = this.filterParams.mr;
      else
        this.filter.mr = null;
      if (this.filterParams.rivenDisp)
        this.filter.rivenDisp = this.filterParams.rivenDisp;
      else
        this.filter.rivenDisp = null;

      if (this.filterParams.tier){
        this.filter.tierChoices = this.filterParams.tier;
        this.tierSelect.setValue(this.filterParams.tier);
      }
      else{
        this.filter.tierChoices = [];
        this.tierSelect.reset();
      }
      if (this.filterParams.buildType) {
        this.filter.buildChoices = this.filterParams.buildType;
        this.buildSelect.setValue(this.filterParams.buildType);
      }
      else {
        this.filter.buildChoices = [];
        this.buildSelect.reset();
      }
      if (this.filterParams.triggerType) {
        this.filter.triggerChoices = this.filterParams.triggerType;
        this.triggerSelect.setValue(this.filterParams.triggerType);
      }
      else {
        this.filter.triggerChoices = [];
        this.triggerSelect.reset();
      }
      if (this.filterParams.category) {
        this.filter.categoryChoices = this.filterParams.category;
        this.categorySelect.setValue(this.filterParams.category);
      }
      else {
        this.filter.categoryChoices = [];
        this.categorySelect.reset();
      }
      if (this.filterParams.munitions) {
        this.filter.munitionChoices = this.filterParams.munitions;
        this.munitionSelect.setValue(this.filterParams.munitions);
      }
      else {
        this.filter.munitionChoices = [];
        this.munitionSelect.reset();
      }

    } else {
      this.filter.base = '';
      this.filter.name = '';

      this.filter.mr = null;
      this.filter.rivenDisp = null;

      this.filter.buildChoices = [];
      this.buildSelect.reset();
      this.filter.triggerChoices = [];
      this.triggerSelect.reset();
      this.filter.categoryChoices = [];
      this.categorySelect.reset();
      this.filter.munitionChoices = [];
      this.munitionSelect.reset();
    }

    this.filter.filterCategory = this.data.currentTab;
    this.changeTab(this.data.currentTab);
  }

  changeTab(tab) {
    this.filter.changeTab(tab);

    this.categoryTypes = this.filter.categoryTypes;
    this.munitionTypes = this.filter.munitionTypes;
    this.buildTypes = this.filter.buildTypes;
    this.triggerTypes = this.filter.triggerTypes;
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
    if (this.buildSelect.value) {
      filterParams.buildType = this.buildSelect.value;
    }
    if (this.categorySelect.value) {
      filterParams.category = this.categorySelect.value;
    }
    if (this.triggerSelect.value) {
      filterParams.triggerType = this.triggerSelect.value;
    }
    if (this.munitionSelect.value) {
      filterParams.munitions = this.munitionSelect.value;
    }
    if (this.tierSelect.value) {
      filterParams.tier = this.tierSelect.value;
    }

    this.filter.apply(this.filterParams);
  }

  clear() {
    this.buildSelect.reset();
    this.categorySelect.reset();
    this.triggerSelect.reset();
    this.munitionSelect.reset();
    this.tierSelect.reset();

    this.filter.clear();
  }

}
