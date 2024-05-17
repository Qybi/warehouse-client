import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { PCAssignment } from '../models/pcassignment'; // Assicurati di importare il modello corretto per i corsi

@Injectable({
  providedIn: 'root',
})
export class PCAssignmentService {  //servizio usato per comunicare con l'API del backend Blazor per gestire i corsi
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/pcAssignment';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}
  
  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei corsi
  getPCAssignments(): Observable<PCAssignment[]> {
    return this.http.get<PCAssignment[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo corso in base al suo ID
  getPCAssignmentDetails(id: number): Observable<PCAssignment> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<PCAssignment>(url);
  }
  
  //funzione per creare un nuovo corso
  createPCAssignment(pcassignment: PCAssignment): Observable<PCAssignment> {
    return this.http.post<PCAssignment>(`${this._baseURL}/create`, pcassignment, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un corso esistente
  updatePCAssignment(pcassignment: PCAssignment): Observable<PCAssignment> {
    return this.http.put<PCAssignment>(`${this._baseURL}/update?id=${pcassignment.id}`, pcassignment, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un corso in base al suo ID
  deletePCAssignment(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }


}
