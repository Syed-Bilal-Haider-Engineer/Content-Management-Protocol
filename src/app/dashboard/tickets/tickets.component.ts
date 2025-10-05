import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets:Ticket[] = [];

  handleNewTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }
handleCloseTicket(id: number) {
  this.tickets = this.tickets.map(ticket => {
    if (ticket.id === id) {
      return { ...ticket, status: 'closed' }; 
    }
    return ticket;
  });
}

}
