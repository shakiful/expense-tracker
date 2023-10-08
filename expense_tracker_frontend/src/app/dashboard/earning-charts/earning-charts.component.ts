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

@Component({
  selector: 'app-earning-charts',
  templateUrl: './earning-charts.component.html',
  styleUrls: ['./earning-charts.component.scss'],
})
export class EarningChartsComponent implements OnInit {
  selectedOption: string = '5';
  private root!: am5.Root;
  private chart!: am5xy.XYChart; // Type annotation for chart
  private series!: am5xy.ColumnSeries; // Type annotation for series

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.onSelected(this.selectedOption);
  }

  onSelected(value: string) {
    this.selectedOption = value;
    console.log(this.selectedOption);

    this.cdr.detectChanges();

    // Chart code goes in here
    this.browserOnly(() => {
      console.log(this.selectedOption);
      let root = am5.Root.new('chartdiv');

      console.log(this.selectedOption);

      root.setThemes([am5themes_Animated.new(root)]);

      console.log(this.selectedOption);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: 'panX',
          wheelY: 'zoomX',
        })
      );

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      let cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          behavior: 'zoomX',
        })
      );
      cursor.lineY.set('visible', false);

      let date = new Date();
      date.setHours(0, 0, 0, 0);
      let value = 100;

      function generateData() {
        value = Math.round(Math.random() * 10 - 5 + value);
        am5.time.add(date, 'day', 1);
        return {
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

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          maxDeviation: 0,
          baseInterval: {
            timeUnit: 'day',
            count: 1,
          },
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 60,
          }),
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value',
          valueXField: 'date',
        })
      );

      series.columns.template.setAll({
        strokeOpacity: 0,
        width: am5.percent(30),
      });

      let data = generateDatas(50);
      let maxDataPoints = Number(this.selectedOption); // Change this to your desired limit
      console.log(this.selectedOption);
      let limitedData = data.slice(0, maxDataPoints);
      series.data.setAll(limitedData);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
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
