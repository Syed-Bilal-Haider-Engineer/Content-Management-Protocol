import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor((+now - +date) / 1000);

    if (seconds < 60) return 'Just now';
    const intervals: Record<string, number> = {
      minute: 60,
      hour: 3600,
      day: 86400,
      week: 604800,
      month: 2592000,
      year: 31536000,
    };

    for (const [key, secondsInUnit] of Object.entries(intervals)) {
      const counter = Math.floor(seconds / secondsInUnit);
      if (counter > 0) {
        return counter === 1 ? `1 ${key} ago` : `${counter} ${key}s ago`;
      }
    }
    return 'Just now';
  }
}
