import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let options1 = {
      chart: {
        type: 'bar',
        
      },
      colors : ['#CA3737'],
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125,104,65,45]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec']
      }
    }
    
    let chart1 = new ApexCharts(document.querySelector('#chart1'), options1)
    chart1.render()


    let options2 = {
      chart: {
        type: 'donut'
      },
      series: [44, 55, 13, 33],
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
      pie: {
        donut: {
          labels: {
            show: true,
            name: 'total',
            value: 500
          }
        }
      }
      

    }
    
    let chart2 = new ApexCharts(document.querySelector('#chart2'), options2)
    chart2.render()



    let options3 = {
      chart: {
        type: 'bar',
        
      },
      colors : ['#4CB040'],
      series: [
        {
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125,104,65,45]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec']
      }
    }
    
    let chart3 = new ApexCharts(document.querySelector('#chart3'), options3)
    chart3.render()


    let options4 = {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 380
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        offsetX: 10,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "جده",
          "الرياض",
          "الدمام",
          "الفطيم",
          "المدينة المنورة",
          "مكة المركمة",
          "الطائف",
          "نجران",
          "المنطقة الشرقية",
          "منطقة عسير"
        ]
      },
      yaxis: {
        labels: {
          show: false
        }
      },

    }
    
    let chart4 = new ApexCharts(document.querySelector('#chart4'), options4)
    chart4.render()



    let options5 = {
      series: [
        {
          data: [
            8107.85,
            8128.0,
            8122.9,
            8165.5,
            8340.7,
            8423.7,
            8423.5,
            8514.3,
            8481.85,
            8487.7,
            8506.9,
            8626.2,
            8668.95,
            8602.3,
            8607.55,
            8512.9,
            8496.25,
            8600.65,
            8881.1,
            9340.85
          ],
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      labels: [
        "13 Nov 2017",
        "14 Nov 2017",
        "15 Nov 2017",
        "16 Nov 2017",
        "17 Nov 2017",
        "20 Nov 2017",
        "21 Nov 2017",
        "22 Nov 2017",
        "23 Nov 2017",
        "24 Nov 2017",
        "27 Nov 2017",
        "28 Nov 2017",
        "29 Nov 2017",
        "30 Nov 2017",
        "01 Dec 2017",
        "04 Dec 2017",
        "05 Dec 2017",
        "06 Dec 2017",
        "07 Dec 2017",
        "08 Dec 2017"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
    }
    
    let chart5 = new ApexCharts(document.querySelector('#chart5'), options5)
    chart5.render()

    

  }

}
