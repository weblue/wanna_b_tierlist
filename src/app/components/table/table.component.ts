import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatTable} from '@angular/material/table';
import {Categories, columnDefs} from '../../models/Database';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Primary} from '../../models/Primary';
import {Secondary} from '../../models/Secondary';
import {Melee} from '../../models/Melee';
import {Subscription} from "rxjs/internal/Subscription";
import {Tier} from "../../models/Tier";
import {Item} from "../../models/Item";
import {FilterDialogService} from "../../services/filter-dialog.service";

import {
  faSearch,
  faChevronCircleDown,
  faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";
import {FilterParams} from "../../models/FilterParams";
import {MatDialog} from "@angular/material/dialog";
import {FilterService} from "../../services/filter.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TableComponent implements OnInit {

  expandedElement: Primary | Secondary | Melee | null;
  tabs: string[] = ['Primaries', 'Secondaries', 'Melees'];
  activeTab = this.tabs[0];

  faSearch = faSearch;
  faTimes = faTimes;
  faDown = faChevronCircleDown;
  faUp = faChevronCircleUp;

  private loading: boolean = true;
  @ViewChild('table') el: MatTable<any>;
  quickSearchName: string;

  displayedColumns: string[] = [];
  tableDataSource: (Item | Tier)[] = [];

  _tableDataSub: Subscription;

  private showSearch: boolean = true;
  private showClear: boolean = false;
  private filterDisplay: string = '';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private data: DataService,
    private filter: FilterService,
    private filterDialog: FilterDialogService,
    private dialog: MatDialog
  ) {
    this._tableDataSub = data.dataChange.subscribe(() => {
      this.load(this.activeTab);
    });
    this.dialog.afterAllClosed.subscribe(() => {
      if (Object.keys(this.data.getCurFilterParams()).length !== 0) {
        this.showSearch = false;
        this.showClear = true;
        this.setFilterDisplay(JSON.stringify(this.data.getCurFilterParams()));
      } else {
        this.quickSearchName = null;
        this.showSearch = true;
        this.showClear = false;
        this.filterDisplay = null;
      }

    });
  }

  ngOnInit() {
    this.load(Categories.PRIMARY.toString());
  }

  switch(tab: string) {
    this.data.filterParams = new FilterParams();

    tab = tab.toLowerCase();
    this.data.getTabData(tab).subscribe((array) => {
      this.loading = false;
      this.tableDataSource = array;
      this.displayedColumns = columnDefs[tab];
      this.update();
    });
  }

  load(tab: string) {
    tab = tab.toLowerCase();
    this.data.getTabData(tab).subscribe((array) => {
      this.loading = false;
      this.tableDataSource = array;
      this.displayedColumns = columnDefs[tab];
      this.update();
    });
  }

  toggleFilterDialog() {
    this.filterDialog.toggle();
  }

  clear() {
    this.filter.clear();

    this.quickSearchName = null;
    this.showSearch = true;
    this.showClear = false;
    this.filterDisplay = null;
  }

  update(): void {
    this.changeDetectorRef.detectChanges();
  }

  quickFilter(): void {
    let simpleParams = new FilterParams();
    simpleParams.name = this.quickSearchName;
    this.data.setFilterParams(simpleParams);
  }

  setFilterDisplay(text: string): void {
    text = text.replace(/"],"/g, " | ");
    text = text.replace(/","/g, ", ");
    text = text.replace(/[^a-zA-Z0-9 :,|]/g, "");
    text = text.replace(/[:]/g, ": ");

    this.filterDisplay = text;
  }
}
