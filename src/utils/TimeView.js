export const changeTimeView = (timedelta) => {
  const match = timedelta.match(/P(?:(\d+Y)?(\d+M)?(\d+D)?)?T(?:(\d+H)?(\d+M)?)?/);

  let years = 0;
  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;

  if (match[1]) {
    years = parseInt(match[1].replace("Y", ""), 10);
  }
  if (match[2]) {
    months = parseInt(match[2].replace("M", ""), 10);
  }
  if (match[3]) {
    days = parseInt(match[3].replace("D", ""), 10);
  }
  if (match[4]) {
    hours = parseInt(match[4].replace("H", ""), 10);
  }
  if (match[5]) {
    minutes = parseInt(match[5].replace("M", ""), 10);
  }

  // Преобразуем годы и месяцы в дни
  days += years * 365; // 1 год = 365 дней
  days += months * 30; // 1 месяц = 30 дней

  const parts = [];
  if (days) parts.push(`${days} д.`);
  if (hours) parts.push(`${hours} ч.`);
  if (minutes) parts.push(`${minutes} мин.`);

  return parts.join(" ");
};

export const formatDateTime = (datetime) => {
  const date = new Date(datetime);

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Месяцы начинаются с 0
  const year = date.getFullYear();

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
