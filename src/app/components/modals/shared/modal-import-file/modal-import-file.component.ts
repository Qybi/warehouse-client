import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploaderService } from '../../../../services/file-uploader.service';
import * as ExcelJS from 'exceljs';
import { IndexedFieldWithPossiblyUndefined, NumericDictionary } from 'lodash';

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

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e: any) => {
      const arrayBuffer = e.target.result;
      this.parseExcel(arrayBuffer);
    };

    fileReader.readAsArrayBuffer(file);
  }

  parseExcel(arrayBuffer: any): void {
    const workbook = new ExcelJS.Workbook();
    workbook.xlsx.load(arrayBuffer).then((workbook) => {
      let jsonData: any[] = [];
      workbook.eachSheet((worksheet, sheetId) => {
        const rowName:any[] = [];
        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
          let rowData: any = {};
          let count:number = 0;
          row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            if(rowNumber === 1){
              rowName.push(cell.value);
            }else{
              rowData[rowName[count++]] = cell.value;
            }
          });
          jsonData.push(rowData);
        });
      });
  
      console.log(JSON.stringify(jsonData, null, 2));
    });
  }
}
