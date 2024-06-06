export const TimeFormat = (timeStr: string | undefined): string => {
   return new Date(timeStr).toLocaleTimeString();
}

export const DateFormat = (dateStr: string | undefined): string => {
   return new Date(dateStr).toLocaleDateString();
}