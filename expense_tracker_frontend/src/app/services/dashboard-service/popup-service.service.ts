import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupServiceService {
  private showPopup = new Subject<boolean>();

  constructor() {}

  getOpenPop() {
    return this.showPopup.asObservable();
  }

  setOpenPop(popup: boolean) {
    this.showPopup.next(popup);
  }
}
