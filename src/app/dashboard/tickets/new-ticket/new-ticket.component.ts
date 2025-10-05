import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from '../../../shared/controls/controls.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onAddTicket = output<{
    title: string;
    description: string;
    date: Date;
    status: "open" | "in-progress" | "closed";
    id: number;
  }>();
  onSubmit(event: Event, titleElement: string, textValue: string) {
    event?.preventDefault();
    this.onAddTicket.emit({ title: titleElement, description:textValue, date: new Date(), status: 'open', id: Math.floor(Math.random() * 10000) });
    this.form().nativeElement.reset();
  }
}
