import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pc } from '../models/pc'; //import del modello per i PC

@Injectable({
  providedIn: 'root',
})

export class PCService {
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/pc';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}

  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei pc
  getPcs(): Observable<Pc[]> {
    return this.http.get<Pc[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo pc in base al suo ID
  getPcDetails(id: number): Observable<Pc> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<Pc>(url);
  }
  
  //funzione per creare un nuovo pc
  createPc(pc: Pc): Observable<Pc> {
    return this.http.post<Pc>(`${this._baseURL}/create`, pc, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un pc esistente
  updatePc(pc: Pc): Observable<Pc> {
    console.log(pc.id);
    return this.http.put<Pc>(`${this._baseURL}/update?id=${pc.id}`, pc, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un pc in base al suo ID
  deletePc(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }

  checkSerial(serial: string): Observable<boolean>{
    return this.http.get<boolean>(`${this._baseURL}/checkSerialPc?serial=${serial}`); //ritorna true se il serial è già presente nel DB
  }

  insertSerial(pc: Pc): Observable<Pc>{
    return this.http.post<Pc>(`${this._baseURL}/insertSerial`, pc, { headers: this.httpHeaders });
  }

  getPcFromSerial(serial: string): Observable<Pc>{
    return this.http.get<Pc>(`${this._baseURL}/getPcFromSerial?serial=${serial}`);
  }

}
