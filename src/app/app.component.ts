import { Component } from '@angular/core';
import { HeadersComponent } from "./headers/headers.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeadersComponent, TicketsComponent, ServerStatusComponent, TrafficComponent, DashboardItemComponent],
})
export class AppComponent {
}
