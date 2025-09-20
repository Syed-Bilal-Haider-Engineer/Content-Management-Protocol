import { Component } from '@angular/core';
import { HeadersComponent } from "./headers/headers.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeadersComponent, TicketsComponent, ServerStatusComponent, TrafficComponent],
})
export class AppComponent {
}
