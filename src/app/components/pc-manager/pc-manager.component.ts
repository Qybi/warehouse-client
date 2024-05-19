import { Component } from '@angular/core';
import { Pc as Pc } from '../../models/pc';
import { PCService } from '../../services/pc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { WorkInProgressComponent } from '../dev/work-in-progress/work-in-progress.component';
import { ModalPcEditComponent } from '../modals/modal-pc-edit/modal-pc-edit.component';

@Component({
  selector: 'app-pc-manager',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pc-manager.component.html',
  styleUrl: './pc-manager.component.scss'
})
export class PcManagerComponent {
  displayPcs: Pc[] = [];
  Pcs: Pc[] = [];

  search: string = '';

  constructor(
    private pcService: PCService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.pcService.getPcs().subscribe(pcs => {
      pcs.forEach(x => x.status = x.status.toUpperCase());
      this.Pcs = pcs;
      this.displayPcs = this.Pcs.map(x => x);
    });
  }

  openImport() {
    const m = this.modalService.open(WorkInProgressComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true
    });
  }

  searchPc() {
    this.displayPcs = this.Pcs.filter((pc) => {
      return (
        pc.serial.toLowerCase().includes(this.search.toLowerCase()) ||
        pc.propertySticker.toLowerCase().includes(this.search.toLowerCase()) ||
        pc.stock?.model.toLowerCase().includes(this.search.toLowerCase())
      );
    });
  }

  openEdit(pc: Pc) {
    const m = this.modalService.open(ModalPcEditComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true
    });
    (m.componentInstance as ModalPcEditComponent).initModal(pc);
    
  }
}
