import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  ticket: Ticket = {
    id: {}
  } as Ticket;

  constructor(
    private ticketServie: TicketService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +(this.activatedRoute.snapshot.paramMap.get('id') || 0);
    this.ticketServie.getTicketDetails(id).subscribe((ticket) => {
      this.ticket = ticket;
    });
  }
}
