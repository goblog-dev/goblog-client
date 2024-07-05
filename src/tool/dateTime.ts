export const TimeFormat = (timeStr: string | number | Date): string => {
   if (timeStr === undefined) {return ""}
   return new Date(timeStr).toLocaleTimeString();
}

const monthName = {
   1: "Jan"
   , 2: "Feb"
   , 3: "Mar"
   , 4: "Apr"
   , 5: "May"
   , 6: "Jun"
   , 7: "Jul"
   , 8: "Aug"
   , 9: "Sep"
   , 10: "Oct"
   , 11: "Nov"
   , 12: "Dec"
}

const dayName = {
   0: "Sun"
   , 1: "Mon"
   , 2: "Tue"
   , 3: "Wed"
   , 4: "Thu"
   , 5: "Fri"
   , 6: "Sat"
}

export const DateFormat = (dateStr: string | number | Date): string => {
   if (dateStr === undefined) {return ""}

   const newDate= new Date(dateStr);
   const yyyy = newDate.getFullYear();
   const mmm = newDate.getMonth() + 1;
   const dd = newDate.getDate();
   const ddd = newDate.getDay();

   // @ts-ignore
   return `${dayName[parseInt(ddd)]}, ${dd} ${monthName[parseInt(mmm)]} ${yyyy}`;
}