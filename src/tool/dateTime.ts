export const TimeFormat = (timeStr: string | number | Date): string => {
   if (timeStr === undefined) {return ""}
   return new Date(timeStr).toLocaleTimeString();
}

export const DateFormat = (dateStr: string | number | Date): string => {
   if (dateStr === undefined) {return ""}
   return new Date(dateStr).toLocaleDateString();
}