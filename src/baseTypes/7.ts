/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
};
function isWeekend(dayOfWeek: Day):boolean {
  if (dayOfWeek === Day.Saturday || dayOfWeek === Day.Sunday) {
    return true;
  } else {
    return false;
  }
}


isWeekend(Day.Monday)