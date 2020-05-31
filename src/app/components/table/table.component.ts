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
import {SidebarService} from "../../services/sidebar.service";
import {faSearch, faStar, faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FilterParams} from "../../models/FilterParams";

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

  //TODO address lag on table change
  expandedElement: Primary | Secondary | Melee | null;
  tabs: string[] = ['Primaries', 'Secondaries', 'Melees'];
  activeTab = this.tabs[0];

  faSearch = faSearch;
  faStar = faStar;
  faDown = faChevronDown;
  faUp = faChevronUp;

  private loading: boolean = true;
  @ViewChild('table') el: MatTable<any>;
  quickSearchName: string;

  displayedColumns: string[] = [];
  tableDataSource: (Item | Tier)[] = [];

  _tableDataSub: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private data: DataService,
    private sideServ: SidebarService
  ) {
    this._tableDataSub = data.dataChange.subscribe(() => {
      this.switch(this.activeTab);
    });
  }

  ngOnInit() {
      this.data.getDb().subscribe((db) => {
        this.loading = false;
        this.switch(Categories.PRIMARY.toString());
      });
  }

  switch(tab: string) {
    tab = tab.toLowerCase();
    this.data.getTabData(tab).subscribe((array) => {
      this.loading = false;
      this.tableDataSource = array;
      this.displayedColumns = columnDefs[tab];
      this.update();
    });
  }

  toggleSidebar() {
    this.sideServ.toggle();
  }

  update(): void {
    this.changeDetectorRef.detectChanges();
  }

  quickFilter(): void {
    let simpleParams = new FilterParams();
    simpleParams.name = this.quickSearchName;
    console.log(this.quickSearchName);
    this.data.setFilterParams(simpleParams);
  }
}
