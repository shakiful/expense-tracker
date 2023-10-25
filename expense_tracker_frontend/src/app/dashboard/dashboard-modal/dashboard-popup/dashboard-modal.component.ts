import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopupServiceService } from 'src/app/services/dashboard-service/popup-service.service';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbDate,
  NgbModule,
  NgbCalendar,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { spendingList } from '../spending-list.model';

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
      description: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.popupService.getOpenPop().subscribe((popup: boolean) => {
      this.showPopup = popup;
      this.model = this.calendar.getToday();
    });
    console.log(this.showPopup);
    this.popupService.getData().subscribe((data) => {
      this.spendingLists = data;
    });
  }

  save() {
    this.isSubmitted = true;
    console.log(this.form.value);
    console.log(this.date);
    this.closePopup();
    this.form.reset();
  }

  closePopup(): void {
    this.showPopup = false;
    this.form.reset();
  }
}
