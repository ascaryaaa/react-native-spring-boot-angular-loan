import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notification-download-modal',
  standalone: true,
  imports: [],
  templateUrl: './notification-download-modal.component.html',
  styleUrl: './notification-download-modal.component.css'
})
export class NotificationDownloadModalComponent {
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
