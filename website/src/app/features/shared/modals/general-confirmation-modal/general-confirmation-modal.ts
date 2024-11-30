import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-general-confirmation-modal',
  templateUrl: './general-confirmation-modal.html',
  styleUrls: ['./general-confirmation-modal.scss'],
  standalone: true,
})
export class GeneralConfirmationModalComponent {
  @Input() info: any = {};
  modal = inject(NgbActiveModal);
  yes() {
    this.modal.close('Yes');
  }
  no() {
    this.modal.close('No');
  }
  hide() {
    this.modal.close();
  }
}
