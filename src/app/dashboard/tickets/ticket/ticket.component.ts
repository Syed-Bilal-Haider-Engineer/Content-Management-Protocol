import { Component, input, Output, EventEmitter, signal } from '@angular/core';
import { Ticket } from './../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
   data = input.required<Ticket>(); 
  @Output() onClose = new EventEmitter<number>(); 
  isDetailsVisible = signal(false); 

  onDetailsToggle() {
    this.isDetailsVisible.update(visible => !visible);
  }

  onCloseTicket() {
    this.onClose.emit(this.data().id);
  }
}
