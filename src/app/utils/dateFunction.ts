export function formatEpochDate(epoch: number): string {
  const dateObj = new Date(epoch);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = ('0' + dateObj.getMinutes()).slice(-2);
  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
  return formattedDate;
}

export function changeDateToDayMonth(epoch: number) {
  const date = new Date(epoch);

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}`;
}
