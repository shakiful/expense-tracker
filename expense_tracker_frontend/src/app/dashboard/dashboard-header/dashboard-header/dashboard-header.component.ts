import { PopupServiceService } from 'src/app/services/dashboard-service/popup-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  ngOnInit(): void {
    this.showPopup = false;
  }
  constructor(private popupService: PopupServiceService) {}
  showPopup: boolean = false;
  openPopup(): void {
    this.showPopup = true;
    this.popupService.setOpenPop(this.showPopup);
  }
}
