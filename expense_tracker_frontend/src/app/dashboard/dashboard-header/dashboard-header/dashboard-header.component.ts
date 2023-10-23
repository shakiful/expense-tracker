import { PopupServiceService } from 'src/app/services/dashboard-service/popup-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private popupService: PopupServiceService) {}
  showPopup = true;
  openPopup(): void {
    this.popupService.setOpenPop(this.showPopup);
  }
}
