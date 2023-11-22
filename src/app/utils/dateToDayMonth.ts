export function changeDateToDayMonth(epoch: number) {
  const date = new Date(epoch);

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}`;
}
