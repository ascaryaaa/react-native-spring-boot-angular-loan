import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rejecting-modal',
  standalone: true,
  imports: [],
  templateUrl: './rejecting-modal.component.html',
  styleUrl: './rejecting-modal.component.css'
})
export class RejectingModalComponent {
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
