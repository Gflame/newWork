import {Component, OnInit} from '@angular/core';
import {TableData} from '../dashboard/table-data/table-data';
import { Router } from '@angular/router';

// <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>

@Component({
  selector: 'amte-new-table',
  template: '<table>' +
  '<tr>' +
  '<th>Name</th>' +
  '<th>Position</th>' +
    '</tr>' +
  '<tr *ngFor="let i of data">' +
  '<td><a [routerLink]="[\'/product-details\', i.ext]">{{i.name}}</a></td>' +
  '<td>{{i.position}}</td>' +
  '</tr>' +
  '</table>'

})



export class NewTableComponent implements OnInit {



  get data(): Array<any> {
    return this._data;
  }

  set data(value: Array<any>) {
    this._data = value;
  }

  private _data = TableData;
  private products = '';


  constructor (private router: Router) {
    for (let i = 0; i < 100; i++) {
      this.products = this._data[i].ext;
    }
  }

  onClick (i) {
    this.router.navigate(['/product-details', this.products]);
  }


  // settings = {
  //   columns: {
  //     name: {
  //       title: 'Full Name'
  //     },
  //     position: {
  //       title: 'Position'
  //     },
  //     office: {
  //       title: 'office'
  //     },
  //     ext: {
  //       title: 'ext'
  //     },
  //     startDate: {
  //       title: 'startDate'
  //     },
  //     salary: {
  //       title: 'salary'
  //     }
  //   }
  // };
  ngOnInit() {
  }

}
