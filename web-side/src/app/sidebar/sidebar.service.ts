import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private showSidebar = new BehaviorSubject<boolean>(true);

  // Observable stream
  public showSidebar$ = this.showSidebar.asObservable();

  constructor() { }

  toggleSidebar(isVisible: boolean) {
    this.showSidebar.next(isVisible);
  }
}
