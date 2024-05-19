import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accessory } from '../models/accessory'; //import del modello per gli accessori
import { AccessoryAssignment } from '../models/accessory-assignment';

@Injectable({
  providedIn: 'root',
})

export class AccessoryService {
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/accessory';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}

  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco degli accessori
  getAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo accessorio in base al suo ID
  getAccessoryDetails(id: number): Observable<Accessory> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<Accessory>(url);
  }
  
  //funzione per creare un nuovo accessorio
  createAccessory(accessory: Accessory): Observable<Accessory> {
    return this.http.post<Accessory>(`${this._baseURL}/create`, accessory, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un accessorio esistente
  updateAccessory(accessory: Accessory): Observable<Accessory> {
    return this.http.put<Accessory>(`${this._baseURL}/update?id=${accessory.id}`, accessory, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un accessorio in base al suo ID
  deleteAccessory(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }
}
