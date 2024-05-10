import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploaderService } from '../../../../services/file-uploader.service';

@Component({
  selector: 'app-modal-import-file',
  standalone: true,
  imports: [],
  templateUrl: './modal-import-file.component.html',
  styleUrl: './modal-import-file.component.scss',
})
export class ModalImportFileComponent {
  title: string = '';
  message: string = '';

  fileToUpload: File | null = null;

  constructor(
    public activeModal: NgbActiveModal,
    private fileUploaderService: FileUploaderService
  ) {}

  preRender(title: string, message: string) {
    this.title = title;
    this.message = message;
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.fileToUpload = files.item(0);
  }

  private uploadFileToActivity() {
    // this.fileUploaderService.postFile(this.fileToUpload).subscribe(data => {
    //   // do something, if upload success
    //   }, error => {
    //     console.log(error);
    //   });
  }
}
