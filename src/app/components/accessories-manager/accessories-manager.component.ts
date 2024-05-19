import { Component } from '@angular/core';
import { Accessory } from '../../models/accessory';
import { AccessoryService } from '../../services/accessories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkInProgressComponent } from '../dev/work-in-progress/work-in-progress.component';
import { ModalAccessoryEditComponent } from '../modals/modal-accessory-edit/modal-accessory-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accessories-manager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './accessories-manager.component.html',
  styleUrl: './accessories-manager.component.scss'
})
export class AccessoriesManagerComponent {
  displayAccessories: Accessory[] = [];
  accessories: Accessory[] = [];

  search: string = '';

  constructor(
    private accService: AccessoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.accService.getAccessories().subscribe(accs => {
      this.accessories = accs;
      this.displayAccessories = this.accessories.map(x => x);
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

  searchAcc() {
    this.displayAccessories = this.accessories.filter((accessory) => {
      return (
        accessory.name.toLowerCase().includes(this.search.toLowerCase()) ||
        accessory.description.toLowerCase().includes(this.search.toLowerCase()) ||
        accessory.stock?.model.toLowerCase().includes(this.search.toLowerCase())
      );
    });
  }

  openEdit(accessory: Accessory) {
    const m = this.modalService.open(ModalAccessoryEditComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true
    });
    (m.componentInstance as ModalAccessoryEditComponent).initModal(accessory);
  }

  openAdd() {
    const m = this.modalService.open(WorkInProgressComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true
    });
  }
}
