import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {TableData} from '../dashboard/table-data/table-data';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'amte-table',
  templateUrl: 'table-component.html',
})
export class TableComponent implements OnInit {


  displayedColumns = ['name', 'position', 'office', 'ext', 'startDate', 'salary'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;
  @ViewChild( MdPaginator ) paginator: MdPaginator;

  ngOnInit(): void {

    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    console.log(this.exampleDatabase.dataChange);
  }
}


export interface UserData {
  name: string;
  position: string;
  office: string;
  ext: string;
  startDate: string;
  salary: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  get data(): UserData[] {
    return this.dataChange.value;
  }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) {
      this.addUser(i);
    }
  }

  /** Adds a new user to the database. */
  addUser(i) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser(i));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser(i) {
    // const name = TableData.map(function (a) {
    //   return a.name;
    // });
    //console.log(name);
    // const name =
    //   NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    //   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    //console.log(TableData);
    return {
      name: TableData[i].name,
      position: TableData[i].position,
      office: TableData[i].office,
      ext: TableData[i].ext,
      startDate: TableData[i].startDate,
      salary: TableData[i].salary
      // id: (this.data.length + 1).toString(),
      // name: name,
      // progress: Math.round(Math.random() * 100).toString(),
      // color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {

  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Is pagination */

  connect(): Observable<UserData[]> {
        const displayDataChanges = [
          this._exampleDatabase.dataChange,
          this._paginator.page,
          this._filterChange,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
          // if (this._paginator.page) {
          //   const data = this._exampleDatabase.data.slice();
          //   // Grab the page's slice of data.
          //   const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          //   return data.splice(startIndex, this._paginator.pageSize);
          // }
          console.log(this._filterChange);

            return this._exampleDatabase.data.slice().filter((item: UserData) => {
              const searchStr = (item.name).toLowerCase();
              return searchStr.indexOf(this.filter.toLowerCase()) != -1;
            });


      });

 }



  /** Is filtering */
  // connect(): Observable<UserData[]> {
  //   const displayDataChanges = [
  //     this._exampleDatabase.dataChange,
  //     this._filterChange,
  //   ];
  //
  //
  // }

  disconnect() {
  }
}



