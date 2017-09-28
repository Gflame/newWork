import {Component, ViewChild, ElementRef, VERSION } from '@angular/core';




@Component({
  selector: 'amte-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  /*Bar_start*/
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true};
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [78, 18, 60, 19, 86, 37, 10], label: 'Series C'}
    ];
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }
  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
  public randomize(): void {
    let data = [Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  /*Bar_end*/
  /*Doughnut_start*/
  public doughnutChartLabels: string[] = ['Series A', 'Series B', 'Series C'];
  public doughnutChartData: number[] = [70, 12, 18];
  public doughnutChartType: string = 'doughnut';


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
  /*Doughnut_end*/


