import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control' }
})
export class ControlsComponent {
 @Input({required:true}) title: string = '';
}
