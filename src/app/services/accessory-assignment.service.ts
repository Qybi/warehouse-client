import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessoryAssignment } from '../models/accessory-assignment'; // Assicurati di importare il modello corretto per i accessories

@Injectable({
  providedIn: 'root',
})
export class AccessoryAssignmentService {  //servizio usato per comunicare con l'API del backend Blazor per gestire i accessories
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/accessoryAssignment';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}
  
  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei accessories_assignments
  getAccessoryAssignments(): Observable<AccessoryAssignment[]> {
    return this.http.get<AccessoryAssignment[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo accessory in base al suo ID
  getAccessoryAssignmentDetails(id: number): Observable<AccessoryAssignment> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<AccessoryAssignment>(url);
  }

  getStudentAccessoryAssignmentDetails(studentId: number): Observable<AccessoryAssignment[]> {
    const url = `${this._baseURL}/student?studentId=${studentId}`;
    return this.http.get<AccessoryAssignment[]>(url);
  }
  
  //funzione per creare un nuovo accessory
  createAccessoryAssignment(accessoryassignment: AccessoryAssignment): Observable<AccessoryAssignment> {
    return this.http.post<AccessoryAssignment>(`${this._baseURL}/create`, accessoryassignment, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un accessory esistente
  updateAccessoryAssignment(accessoryassignment: AccessoryAssignment): Observable<AccessoryAssignment> {
    return this.http.put<AccessoryAssignment>(`${this._baseURL}/update?id=${accessoryassignment.id}`, accessoryassignment, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un accessory in base al suo ID
  deleteAccessoryAssignment(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }

  returnAccessory(assignmentId: number, returnDate: string, returnReasonId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this._baseURL}/return?assignmentId=${assignmentId}&returnDate=${returnDate}&returnReasonId=${returnReasonId}`);
  }

  getPcAssignmentsByAccessoryId(accessoryId: number): Observable<AccessoryAssignment[]> {
    return this.http.get<AccessoryAssignment[]>(`${this._baseURL}/accessoryData?accessoryId=${accessoryId}`);
  }
}
