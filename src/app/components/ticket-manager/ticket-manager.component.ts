import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket-manager',
  standalone: true,
  imports: [],
  templateUrl: './ticket-manager.component.html',
  styleUrl: './ticket-manager.component.scss'
})
export class TicketManagerComponent {

  tickets: Ticket[] = []
  displayTickets: Ticket[] = []

  constructor(
    private ticketService: TicketService
  ){}

  ngOnInit() {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
      this.displayTickets = this.tickets.map((x) => x);
    });
  }

  openImport() {
    // const m = this.modalService.open(ModalImportFileComponent, {
    //   size: 'lg',
    // });
    // m.componentInstance.preRender('Import PCs', 'Select a file to import PCs');
  }
}
