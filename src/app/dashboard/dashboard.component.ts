
import {Component, ViewChild, ElementRef} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'amte-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {


  /*Bar_start*/
  public barChartOptions: any={
    scaleShowVerticalLines: false, responsive: true
  };
  public barChartLabels: string[]=['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string='bar';
  public barChartLegend: boolean=true;

  public barChartData: any[]=[{
    data: [65, 59, 80, 81, 56, 55, 40],
    label: 'Series A'
  }, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}];
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }
  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
  public randomize(): void {

    let data=[Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40];
    let clone=JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data=data;
    this.barChartData=clone;
  }
  /*Bar_end*/
  /*Doughnut_start*/
  public doughnutChartLabels: string[]=['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[]=[350, 450, 100];
  public doughnutChartType: string='doughnut';


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  /*Doughnut_end*/
  /*tabel_start*/
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);


  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
  /*tabel_end*/
}
