import { Directive } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  standalone: true,
  host: {
    '(click)': 'onConfirm($event)'  
  }
})
export class confirmDirective {
  onConfirm(event: Event): void { 
    const confirmed = window.confirm(
      'Are you sure you want complete?.'
    );

    if (confirmed) {
      event.preventDefault(); 
    }
     return; 
  }
}

