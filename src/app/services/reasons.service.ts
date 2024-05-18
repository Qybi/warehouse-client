import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReasonsAssignment } from '../models/reasons-assignment';
import { ReasonsReturn } from '../models/reasons-return';

@Injectable({
  providedIn: 'root'
})
export class ReasonsService {

  constructor(private http: HttpClient) { }

  getAssignmentReasons(): Observable<ReasonsAssignment[]> {
    return this.http.get<ReasonsAssignment[]>('/reasonsAssignment');
  }

  getReturnReasons(): Observable<ReasonsReturn[]> {
    return this.http.get<ReasonsReturn[]>('/reasonsReturn');
  }
}
