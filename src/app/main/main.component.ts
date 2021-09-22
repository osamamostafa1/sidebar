import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chartTypeBar:any
  chartDatasetsBar:any
  chartLabelsBar:any
  chartColorsBar:any
  chartTypeDoughnut:any
  chartDatasetsDoughnut:any
  chartLabelsDoughnut:any
  chartColorsDoughnut:any
  chartTypeHorizontal:any
  chartDatasetsHorizontal:any
  chartLabelsHorizontal:any
  chartColorsHorizontal:any
  chartTypeHorizontal2:any
  chartDatasetsHorizontal2:any
  chartLabelsHorizontal2:any
  chartColorsHorizontal2:any
  gradientFill:any
  chartColorsLine:any
  chartTypeLine:any
  chartLabelsLine:any
  chartDatasetsLine:any
  constructor() { }

  ngOnInit() {
    this.barChart()
    this.barDoughnut()
    this.barHorizontal()
    this.barHorizontal2()
    this.chartLine()
  }

  barChart(){
    //bar
      this.chartTypeBar = 'bar';

      this.chartDatasetsBar = [
      { data: [65, 59, 80, 81, 56, 55, 60, 59, 55, 50], label: 'My First dataset' }
      ];

      this.chartLabelsBar= ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Purple', 'Orange'];

      this.chartColorsBar= [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        
      }
      ];

  }

  barDoughnut(){
     this.chartTypeDoughnut= 'doughnut';
        
     this.chartDatasetsDoughnut = [300, 50, 100, 40, 120];

     this.chartLabelsDoughnut= ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

     this.chartColorsDoughnut= [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
        hoverBorderWidth: 0, 
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"], 
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
    }];
  }

  barHorizontal(){
     this.chartTypeHorizontal= 'horizontalBar';
     this.chartDatasetsHorizontal= [
      { data: [65, 59, 80, 81, 56,65, 59, 50], label: 'My First dataset' }
    ];
     this.chartLabelsHorizontal = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  
     this.chartColorsHorizontal= [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        
      }
    ];
  }

  barHorizontal2(){
    this.chartTypeHorizontal2= 'horizontalBar';
    this.chartDatasetsHorizontal2= [
     { data: [65, 59, 70, 90, 60, 55 ,5,100], label: 'My First dataset' }
   ];
    this.chartLabelsHorizontal2 = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
 
    this.chartColorsHorizontal2= [
     {
       backgroundColor: [
         'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)',
         'rgba(255, 99, 132, 1)',
       ],
       borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)',
         'rgba(255, 99, 132, 1)',
       ],
       
     }
   ];
 }

  chartLine(){
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('lineChart4');
    let ctxL: any = canvas.getContext("2d");
    this.gradientFill = ctxL.createLinearGradient(0, 0, 0, 250);
    this.gradientFill.addColorStop(0, "rgba(76, 176, 64, 1)");
    this.gradientFill.addColorStop(1, "rgba(76, 176, 64, 0.1)");
    this.chartColorsLine= [
      {
        backgroundColor: this.gradientFill,
        borderColor: [
          '#4CB040'
        ],
        
      }
    ];
     this.chartTypeLine = 'line';
     this.chartLabelsLine = ["January", "February", "March", "April", "May", "June", "July"];
     this.chartDatasetsLine = [
      { data: [0, 65, 45, 65, 35, 65, 0], label: 'My First dataset',borderWidth: 2, },
    ];

  }
  
   


        // all
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
