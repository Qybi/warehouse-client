import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket'; // Assicurati di importare il modello corretto per i corsi

@Injectable({
  providedIn: 'root',
})
export class TicketService {  //servizio usato per comunicare con l'API del backend Blazor per gestire i corsi
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = 'https://localhost:80/api/tickets';  // URL del backend Blazor
  
  constructor(private http: HttpClient) {}
  
  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei tickets
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this._baseURL}`);
  }


  
  //funzione che ritorna i dettagli di un singolo ticket in base al suo ID
  getTicketDetails(id: number): Observable<Ticket> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<Ticket>(url);
  }
  
  //funzione per creare un nuovo ticket
  createTickets(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this._baseURL}/create`, ticket, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un ticket esistente
  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this._baseURL}/update?id=${ticket.id}`, ticket, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un ticket in base al suo ID
  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }

  //funzione per mostrare solo i ticket aperti
  getOpenTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this._baseURL}/open`);
  }

  //funzione per settare lo status dei ticket su "closed"
  setStatusClosed(id: number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this._baseURL}/closeTicket?id=${id}`);
  }
}
