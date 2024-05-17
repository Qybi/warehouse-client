import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessoriesAssignment } from '../models/accessories-assignment'; // Assicurati di importare il modello corretto per i accessories

@Injectable({
  providedIn: 'root',
})
export class AccessoryAssignmentService {  //servizio usato per comunicare con l'API del backend Blazor per gestire i accessories
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/courses';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}
  
  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei accessories_assignments
  getAccessoryAssignments(): Observable<AccessoriesAssignment[]> {
    return this.http.get<AccessoriesAssignment[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo accessory in base al suo ID
  getAccessoryAssignmentDetails(id: number): Observable<AccessoriesAssignment> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<AccessoriesAssignment>(url);
  }
  
  //funzione per creare un nuovo accessory
  createAccessoryAssignment(accessoryassignment: AccessoriesAssignment): Observable<AccessoriesAssignment> {
    return this.http.post<AccessoriesAssignment>(`${this._baseURL}/create`, accessoryassignment, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un accessory esistente
  updateAccessoryAssignment(accessoryassignment: AccessoriesAssignment): Observable<AccessoriesAssignment> {
    return this.http.put<AccessoriesAssignment>(`${this._baseURL}/update?id=${accessoryassignment.id}`, accessoryassignment, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un accessory in base al suo ID
  deleteAccessoryAssignment(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }
}
