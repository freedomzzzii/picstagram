export function timeAgo(time: string): string {
  try {
    const total: number = Date.parse(new Date().toDateString()) - Date.parse(time);

    const seconds: number = Math.floor((total / 1000) % 60);
    const minutes: number = Math.floor((total / 1000 / 60) % 60);
    const hours: number = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days: number = Math.floor((total / (1000 * 60 * 60 * 24)) % 30);
    const months: number = Math.floor((total / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years: number = Math.floor(total / (1000 * 60 * 60 * 24 * 30 * 12));

    if (years > 0) {
      return `${years} YEARS AGO`;
    } else if (months > 0) {
      return `${months} MONTHS AGO`;
    } else if (days > 0) {
      return `${days} DAYS AGO`;
    } else if (hours > 0) {
      return `${hours} HOURS AGO`;
    } else if (minutes > 0) {
      return `${minutes} MINUTES AGO`;
    } else {
      return `${seconds} SECONDS AGO`;
    }
  } catch (error) {
    return '';
  }
}