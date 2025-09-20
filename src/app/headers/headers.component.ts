import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {

}
