export const TimeFormat = (timeStr: string): string => {
   return new Date(timeStr).toLocaleTimeString();
}

export const DateFormat = (dateStr: string): string => {
   return new Date(dateStr).toLocaleDateString();
}