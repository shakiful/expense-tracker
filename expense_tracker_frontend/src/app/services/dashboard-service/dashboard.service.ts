import { ISpritePointerEvent, RoundedRectangle } from '@amcharts/amcharts5';
import { Injectable } from '@angular/core';
import { Subject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  private dataSubject = new Subject<any>();

  setMonthIndex(data: any) {
    // Process the data here
    console.log(data);

    this.dataSubject.next(data); // Emit the processed data
  }

  getMonthIndex() {
    console.log(this.dataSubject.asObservable());

    return this.dataSubject.asObservable();
  }

  filterDataByMonth(chartData: any[], ev: any) {
    let filterData;
    if (ev.target.dataItem) {
      const clickedData = ev.target.dataItem.dataContext as {
        month: number;
        total_value: number;
      };
      // Display the data or perform other actions based on the clicked data
      const timestamp = clickedData.month; // Replace this with your timestamp

      // Convert the timestamp back to a JavaScript Date object
      const date = new Date(timestamp);

      // Get the month index (0-based)
      const monthIndex = date.getMonth();

      filterData = chartData.filter(
        (filteringDataByMonth: { month: number }) => {
          return filteringDataByMonth.month == monthIndex;
        }
      );
    }
    return filterData;
  }
}
