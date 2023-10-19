import { DashboardService } from '../../services/dashboard-service/dashboard.service';
import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-spending-charts',
  templateUrl: './spending-charts.component.html',
  styleUrls: ['./spending-charts.component.scss'],
})
export class SpendingChartsComponent implements OnInit {
  public option: boolean = false;
  isClicked: boolean = false;
  public defaultDateRange: string = '5';
  private root: am5.Root | undefined; // Initialize as undefined initially
  private chart!: am5xy.XYChart; // Type annotation for chart
  private series!: am5xy.ColumnSeries; // Type annotation for series
  public chartData: any[] = []; // Store chart data
  public monthlyValue: any[] = []; // Store chart data by month
  public filterData: any; //filtered Chart Data by month
  limitedData: any;

  // Created the axes as class properties
  private xAxis: am5xy.DateAxis<any> | undefined;
  private yAxis: am5xy.ValueAxis<any> | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private dashboardService: DashboardService,
    private zone: NgZone,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.chartInit(this.defaultDateRange);
  }

  onSelected(value: string) {
    this.defaultDateRange = value;

    console.log(this.limitedData);

    this.chartInit(this.defaultDateRange);
  }

  // Chart code goes in here
  chartInit(defaultDateRange: any) {
    this.browserOnly(() => {
      // Initialize the root only if it's not already created
      if (!this.root) {
        this.root = am5.Root.new('earningbymonthchartdiv');
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

        function __generateData(count: number) {
          let data = [];
          for (let i = 0; i < count; ++i) {
            data.push(generateData());
          }

          return data;
        }

        function filterMonthValue(data: any) {
          let valueByMonth: any[] = [];
          let value = 0;
          let currentMonth = -1; // Initialize to an invalid month

          data.forEach((el: any) => {
            if (el.month !== currentMonth) {
              if (currentMonth !== -1) {
                let currentYear = new Date().getFullYear();
                let date = new Date(currentYear, currentMonth);
                valueByMonth.push({
                  month: date.getTime(),
                  total_value: value,
                });
              }

              // Update the current month and reset the value
              currentMonth = el.month;
              value = el.value;
            } else {
              // This is the same month, so accumulate the value
              value += el.value;
            }
          });
          // Push the last month's total value
          if (currentMonth !== -1) {
            let currentYear = new Date().getFullYear();
            let date = new Date(currentYear, currentMonth);
            valueByMonth.push({
              month: date.getTime(),
              total_value: value,
            });
          }

          return valueByMonth;
        }

        this.chartData = __generateData(90);

        this.monthlyValue = filterMonthValue(this.chartData);
        console.log(this.monthlyValue);
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
            timeUnit: 'month',
            count: 1,
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
        am5xy.ColumnSeries.new(this.root, {
          name: 'Series',
          xAxis: this.xAxis,
          yAxis: this.yAxis,
          valueYField: 'total_value',
          valueXField: 'month',
          fill: am5.color(0x095256),
          stroke: am5.color(0x095256),
          tooltip: am5.Tooltip.new(this.root, {
            labelText: '{valueY}',
          }),
        })
      );

      this.series.columns.template.setAll({
        strokeOpacity: 0,
        width: am5.percent(30),
      });

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/

      // let maxDataPoints = Number(this.defaultDateRange); // Change this to your desired limit
      // let limitedData = this.chartData.slice(0, maxDataPoints);

      function dataRange(
        filterData: any,
        limitedData: any,
        xAxis: any,
        series: any,
        cdr: any
      ) {
        console.log('im in');
        console.log(filterData);

        let maxDataPoints = Number(defaultDateRange); // Change this to your desired limit

        limitedData = filterData.slice(0, maxDataPoints);

        xAxis.set('baseInterval', {
          timeUnit: 'day',
          count: 1,
        });

        series.setAll({ valueXField: 'date', valueYField: 'value' });

        series.data.setAll(limitedData);

        console.log(limitedData);

        cdr.detectChanges();
      }

      if (this.isClicked) {
        console.log('im in');
        dataRange(
          this.filterData,
          this.limitedData,
          this.xAxis,
          this.series,
          this.cdr
        );
      } else {
        this.series.data.setAll(this.monthlyValue);
      }

      console.log(this.option);

      this.series.appear(3000);
      this.chart.appear(1000, 100);

      this.series.columns.template.events.once('click', (ev) => {
        console.log('im in');

        if (!this.isClicked) {
          this.isClicked = true;
          this.option = true;

          this.filterData = this.dashboardService.filterDataByMonth(
            this.chartData,
            ev
          );

          dataRange(
            this.filterData,
            this.limitedData,
            this.xAxis,
            this.series,
            this.cdr
          );
        }
      });
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
