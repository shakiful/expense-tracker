import {
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as d3 from 'd3';

import { SelectedOption } from 'src/app/shared/Enums/selected-option.Enum';
@Component({
  selector: 'app-loan-charts',
  templateUrl: './loan-charts.component.html',
  styleUrls: ['./loan-charts.component.scss'],
})
export class LoanChartsComponent implements OnInit {
  selectedOptionEnum: typeof SelectedOption = SelectedOption;
  selectedOption: SelectedOption = SelectedOption.FiveDays;
  private root: am5.Root | undefined; // Initialize as undefined initially
  private chart!: am5xy.XYChart; // Type annotation for chart
  private series!: am5xy.LineSeries; // Type annotation for series
  public chartData: any[] = []; // Store chart data

  // Created the axes as class properties
  private xAxis: am5xy.DateAxis<any> | undefined;
  private yAxis: am5xy.ValueAxis<any> | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.onSelected(this.selectedOption);
  }

  onSelected(value: SelectedOption) {
    this.selectedOption = value;

    this.chartInit(this.selectedOption);

  }

  // Chart code goes in here
  chartInit(selectedOption: any) {
    this.browserOnly(() => {
      // Initialize the root only if it's not already created
      if (!this.root) {
        this.root = am5.Root.new('loanchartdiv');
        this.root._logo?.dispose();
        this.root.setThemes([am5themes_Animated.new(this.root)]);

        // Create chart
        this.chart = this.root.container.children.push(
          am5xy.XYChart.new(this.root, {
            panX: false,
            panY: false,
            wheelX: 'panX',
            wheelY: 'zoomX',
          })
        );

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = this.chart.set(
          'cursor',
          am5xy.XYCursor.new(this.root, {
            behavior: 'zoomX',
          })
        );
        cursor.lineY.set('visible', false);

        let date = new Date();
        let value = 100;

        function generateData() {
          value = Math.round(Math.random() * 10 - 5 + value);
          am5.time.add(date, 'day', 1);

          return {
            month: date.getMonth(),
            date: date.getTime(),
            value: value,
          };
        }

        function generateDatas(count: number) {
          let data = [];
          for (var i = 0; i < count; ++i) {
            data.push(generateData());
          }


          return data;
        }

        this.chartData = generateDatas(50);

      }

      this.chart.xAxes.clear();
      this.chart.yAxes.clear();
      this.chart.series.clear();

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      this.xAxis = this.chart.xAxes.push(
        am5xy.DateAxis.new(this.root, {
          maxDeviation: 0,
          baseInterval: {
            timeUnit: 'day',
            count: 0,
          },
          renderer: am5xy.AxisRendererX.new(this.root, {
            minGridDistance: 50,
          }),
          tooltip: am5.Tooltip.new(this.root, {}),
        })
      );

      this.yAxis = this.chart.yAxes.push(
        am5xy.ValueAxis.new(this.root, {
          renderer: am5xy.AxisRendererY.new(this.root, {}),
        })
      );

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      this.series = this.chart.series.push(
        am5xy.LineSeries.new(this.root, {
          name: 'Series',
          xAxis: this.xAxis,
          yAxis: this.yAxis,
          valueYField: 'value',
          valueXField: 'date',
          fill: am5.color('#ffb3c5'),
          stroke: am5.color('#ff7495'),
          curveFactory: d3.curveBasis,
          tooltip: am5.Tooltip.new(this.root, {
            labelText: '{valueY}',
          }),
        })
      );

      this.series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.9,
      });

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      this.series.appear(1000);
      this.chart.appear(1000, 100);

      let maxDataPoints = Number(this.selectedOption); // Change this to your desired limit
      let limitedData = this.chartData.slice(0, maxDataPoints);
      this.series.data.setAll(limitedData);
    });
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
        this.cdr.detectChanges(); // Trigger change detection
      });
    }
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
