import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../components/modals/shared/modal-confirm/modal-confirm.component';

@Injectable({
  providedIn: 'root',
})
export class SharedModalService {
  constructor(private modalService: NgbModal) {}

  async openConfirm(title: string, message: string): Promise<boolean> {
    const m = this.modalService.open(ModalConfirmComponent, {
      size: 'sm',
      backdrop: 'static',
      keyboard: false,
      animation: true,
    });
    (m.componentInstance as ModalConfirmComponent).initModal(title, message);
    return await m.result;
  }
}
