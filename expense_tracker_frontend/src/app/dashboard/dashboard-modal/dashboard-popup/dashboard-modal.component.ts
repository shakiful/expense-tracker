import { spendingList } from 'src/app/dashboard/dashboard-modal/spending-list.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopupServiceService } from 'src/app/services/dashboard-service/popup-service.service';
import {
  NgbDate,
  NgbCalendar,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss'],
})
export class DashboardModalComponent implements OnInit {
  form: FormGroup;
  showPopup = true;
  isSubmitted = false;

  date: NgbDate = new NgbDate(1789, 7, 14);
  model: NgbDateStruct | undefined;
  spendingLists: spendingList[] = [];
  filteredList: spendingList[] = [];

  displayMonths = 1;
  navigation = 'select box';
  showWeekNumbers = false;
  outsideDays = 'hidden';

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupServiceService,
    private calendar: NgbCalendar
  ) {
    this.form = this.formBuilder.group({
      amount: [null, [Validators.required, Validators.min(0)]],
      datePicker: [null, Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.popupService.getOpenPop().subscribe((popup: boolean) => {
      this.showPopup = popup;
      this.model = this.calendar.getToday();
      console.log(this.form.value);

      console.log(this.model.day.toString());

      this.filterList(this.model.day.toString());
    });
    // this.popupService.getData().subscribe((data) => {
    //   this.spendingLists = data;
    // });
  }
  onDateChange(event: any) {
    this.filterList(event.day.tostring());
    console.log(event.day.tostring());

    console.log(this.filterList(event.day.tostring()));
  }

  filterList(date: string) {
    this.filteredList = this.spendingLists.filter((data) => {
      let day = data.date.split('-')[2];
      console.log(data.date.split('-')[2]);
      console.log(date);
      console.log(day == date);
      console.log(this.filteredList);

      return day == date;
    });
  }

  save() {
    this.isSubmitted = true;

    if (this.form.valid) {
      const formData = {
        amount: this.form.value.amount,
        date: this.getFormattedDate(this.form.value.datePicker),
        description: this.form.value.description,
      };
      this.spendingLists.push(formData);

      console.log(this.form.value);
      console.log(this.date);
      this.closePopup();
      this.form.reset();
    } else {
      console.error('Form is not valid. Please check the form entries.');
    }

    console.log(this.spendingLists);
  }

  getFormattedDate(date: NgbDate): string {
    const year = date.year;
    const month = date.month;
    const day = date.day;

    // Formatting the date as 'YYYY-MM-DD'
    return `${year}-${this.padNumber(month)}-${this.padNumber(day)}`;
  }

  padNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }

  closePopup(): void {
    this.showPopup = false;
    this.form.reset();
  }
}
