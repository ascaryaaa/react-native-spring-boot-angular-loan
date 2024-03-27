import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private showSidebar = new BehaviorSubject<boolean>(true);
  private activeButton = new BehaviorSubject<number>(0); // Default active button is 0


  // Observable stream
  public showSidebar$ = this.showSidebar.asObservable();
  public activeButton$ = this.activeButton.asObservable();


  constructor() { }

  toggleSidebar(isVisible: boolean) {
    this.showSidebar.next(isVisible);
  }
  setActiveButton(buttonNumber: number) {
    this.activeButton.next(buttonNumber);
  }
}
