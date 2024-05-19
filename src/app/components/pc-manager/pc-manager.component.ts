import { Component } from '@angular/core';
import { Pc as Pc } from '../../models/pc';
import { PCService } from '../../services/pc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

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
      this.Pcs = pcs;
      this.displayPcs = this.Pcs.map(x => x);
    });
  }

  openImport() {
    // const m = this.modalService.open(ModalImportFileComponent, {
    //   size: 'lg',
    // });
    // m.componentInstance.preRender('Import PCs', 'Select a file to import PCs');
  }

  searchStudent() {
    
  }
}
