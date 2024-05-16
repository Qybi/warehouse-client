import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { PCModelStock } from '../models/pcmodel-stock'; // Assicurati di importare il modello corretto per i corsi

@Injectable({
  providedIn: 'root',
})
export class PCModelStockService {  //servizio usato per comunicare con l'API del backend Blazor per gestire i corsi
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = 'https://localhost:80/api/courses';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}
  
  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei pc_model_stocks
  getPCModelStocks(): Observable<PCModelStock[]> {
    return this.http.get<PCModelStock[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo pc_model_stock in base al suo ID
  getPCModelStockDetails(id: number): Observable<PCModelStock> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<PCModelStock>(url);
  }
  
  //funzione per creare un nuovo pc_model_stock
  createPCModelStock(pcmodelstock: PCModelStock): Observable<PCModelStock> {
    return this.http.post<PCModelStock>(`${this._baseURL}/create`, pcmodelstock, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un pc_model_stock esistente
  updatePCModelStock(pcmodelstock: PCModelStock): Observable<PCModelStock> {
    return this.http.put<PCModelStock>(`${this._baseURL}/update?id=${pcmodelstock.id}`, pcmodelstock, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un pc_model_stock in base al suo ID
  deletePCModelStock(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }
}
