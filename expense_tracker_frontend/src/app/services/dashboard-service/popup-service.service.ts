import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { spendingList } from 'src/app/dashboard/dashboard-modal/spending-list.model';

@Injectable({
  providedIn: 'root',
})
export class PopupServiceService {
  private showPopup = new Subject<boolean>();
  private spendingList = new Subject<spendingList[]>();

  constructor() {}

  getOpenPop() {
    return this.showPopup.asObservable();
  }

  setOpenPop(popup: boolean) {
    this.showPopup.next(popup);
  }

  setData(form: spendingList[]) {
    this.spendingList.next(form);
  }

  getData() {
    return this.spendingList;
  }
}
