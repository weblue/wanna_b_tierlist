import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {MatTable} from "@angular/material";
import {Categories, columnDefs} from "../../models/Database";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private loading: boolean = true;
  //TODO make sure to add #reference
  @ViewChild('table') el:MatTable<any>;

  displayedColumns: string[];
  tableDataSource = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private data: DataService,
  ) { }

  ngOnInit() {
      this.data.getDb().subscribe((db) => {
        this.loading = false;
        this.switch(Categories.PRIMARY.toString());
      });
  }

  switch(tab: string) {
    this.data.getDb().subscribe((db) => {
      this.loading = false;
      this.tableDataSource = Object.values(db[tab]);
      this.displayedColumns = columnDefs[tab];
      console.log(this.displayedColumns);
      console.log(this.tableDataSource);
      this.update();
    });
  }

  update(): void {
    this.changeDetectorRef.detectChanges();
  }
}
