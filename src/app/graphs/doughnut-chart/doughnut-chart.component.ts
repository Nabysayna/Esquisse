import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels:string[] = ['Post-Cash', 'TNT', 'Joni-Joni', 'Expresso-Cash'];
  public doughnutChartData:number[] = [350000, 450000, 100000, 200000];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }

}
