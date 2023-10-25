import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopupServiceService } from 'src/app/services/dashboard-service/popup-service.service';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbDate,
  NgbModule,
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
  model!: NgbDateStruct;

  displayMonths = 1;
  navigation = 'select box';
  showWeekNumbers = false;
  outsideDays = 'hidden';

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupServiceService
  ) {
    this.form = this.formBuilder.group({
      amount: [null, [Validators.required, Validators.min(0)]],
      datePicker: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.popupService.getOpenPop().subscribe((popup: boolean) => {
      this.showPopup = popup;
    });
    console.log(this.showPopup);
  }

  save() {
    this.isSubmitted = true;
    console.log(this.form.value);
    this.closePopup();
    this.form.reset();
  }

  closePopup(): void {
    this.showPopup = false;
    this.form.reset();
  }
}
