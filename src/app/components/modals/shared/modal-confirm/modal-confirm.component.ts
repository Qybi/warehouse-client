import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {
  message: string = '';
  title: string =	''
  constructor(public activeModal: NgbActiveModal) {}

  initModal(title: string, message: string): void {
    this.title = title;
    this.message = message;
  }
}
