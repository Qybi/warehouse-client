import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../components/modals/shared/modal-confirm/modal-confirm.component';

@Injectable({
  providedIn: 'root',
})
export class SharedModalService {
  constructor(private modalService: NgbModal) {}

  openConfirm(title: string, message: string): boolean {
    let res: boolean = false;
    const m = this.modalService.open(ModalConfirmComponent, {
      size: 'sm',
      backdrop: 'static',
      keyboard: false,
      animation: true,
    });
    (m.componentInstance as ModalConfirmComponent).initModal(title, message);
    m.result.then((skrrt: boolean) => res = skrrt);
    return res;
  }
}
