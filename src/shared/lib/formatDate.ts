export function formatDate(inputDate: string): string {
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const [day, month, year] = inputDate.split(".").map(Number);
  const date = new Date(`20${year}-${month}-${day}`);
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${daysOfWeek[date.getDay()]}`;
  return formattedDate;
}
