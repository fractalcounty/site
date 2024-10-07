import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateForOpenGraph(date: string): string {
  // Assuming the input date is in a format that can be parsed by Date constructor
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    // If the date is invalid, return the original string
    return date;
  }
  // Format the date as ISO 8601
  return parsedDate.toISOString();
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, '');
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString('default', { month: 'short' });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === 'string') {
      endMonth = '';
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString('default', { month: 'short' });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}
