import { Component, input, Output, EventEmitter, signal } from '@angular/core';
import { Ticket } from './../tickets.model';
import { confirmDirective } from '../../../shared/Directive/dialog.directive';
import { TimeAgoPipe } from "../../../shared/pipes/pipes.pipe";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [confirmDirective, TimeAgoPipe],
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
