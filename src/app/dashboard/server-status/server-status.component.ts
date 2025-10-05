import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'away' | 'unknown'>('online');
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const rnd = Math.floor(Math.random() * 10)

      if (rnd > 5 && rnd <= 8) {
        this.currentStatus.set('offline');
      } else if (rnd > 8 && rnd <= 10) {
        this.currentStatus.set('away');
      } else {
        this.currentStatus.set('online');
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
