import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import _ from 'lodash';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalImportFileComponent } from '../modals/shared/modal-import-file/modal-import-file.component';
import { ModalAssignAccessoriesComponent } from '../modals/shared/modal-assign-accessories/modal-assign-accessories.component';
import { ModalAssignPcComponent } from '../modals/shared/modal-assign-pc/modal-assign-pc.component';
import { ModalAssignBundleComponent } from '../modals/shared/modal-assign-bundle/modal-assign-bundle.component';

@Component({
  selector: 'app-archives',
  standalone: true,
  imports: [],
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss'
})
export class ArchivesComponent {

  

  constructor(
    private router: Router,
    private studentService: StudentService,
    private modalService: NgbModal
  ) {}
  navigateTo(route: string): void {
    this.router.navigate(['/administration', route]);
  }

  openImportStudents() {
    const m = this.modalService.open(ModalImportFileComponent, {
      size: 'lg', 
      backdrop: 'static',
      animation: true,
      keyboard: true
    });

    m.result.then((result) => {
      console.log(result);
    });
  }

  openImportPc(){

  }

  openImportAccessories(){

  }
}
