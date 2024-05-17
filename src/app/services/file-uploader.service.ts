import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploaderService {
  constructor(private http: HttpClient) {}

  postFile(fileToUpload: File, filetype: string): Observable<boolean> {
    const endpoint = 'https://localhost:7085/api/v1/student/import';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .pipe(
        map(() => {
          return true;
        })
      );
  }
}
