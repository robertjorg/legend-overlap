import { AfterViewInit, Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'legend-overlap';

  ngAfterViewInit(): void {
    this.renderGraph();
  }

  renderGraph(): void {
    const myChart = echarts.init(document.getElementById('main'));

      // specify chart configuration item and data
    const option = {
      title : {
          text: 'Legend Overlap',
          subtext: 'Get Enough Lines for Overlap'
      },
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          bottom: 0,
          data: [ 'First Long Name to take up some space', 'Second Long Name to take up some space',
            'Third Long Name to take up some space', 'Fourth Long Name to take up some space', 'Fifth Long Name to take up some space', 'Sixth Long Name to take up some space']
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['1 Month', '2 Months', '3 Months', '4 Months',
              '5 Months', '6 Months', '7 Months', '8 Months', '9 Months', '10 Months', '11 Months', '12 Months']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name: 'First Long Name to take up some space',
              type: 'bar',
              data: [14, 25, 24, 21, 19, 18, 26, 11, 12, 25, 19, 15],
          },
          {
              name: 'Second Long Name to take up some space',
              type: 'bar',
              data: [13, 16, 23, 10, 22, 19, 37, 9, 21, 15, 18, 12],
          }, {
              name: 'Third Long Name to take up some space',
              type: 'bar',
              data: [15, 27, 18, 29, 21, 19, 28, 8, 17, 16, 22, 15],
          }, {
              name: 'Fourth Long Name to take up some space',
              type: 'bar',
              data: [13, 27, 18, 27, 24, 14, 25, 18, 11, 14, 22, 11],
          }, {
              name: 'Fifth Long Name to take up some space',
              type: 'bar',
              data: [10, 12, 25, 16, 18, 25, 39, 16, 19, 11, 19, 12],
          },  {
              name: 'Sixth Long Name to take up some space',
              type: 'bar',
              data: [15, 21, 20, 22, 16, 26, 39, 18, 8, 18, 23, 15],
          }
      ]
  };

    myChart.setOption(option);
  }







}
