export const changeTimeView = (timedelta) => {
    const match = timedelta.match(/PT(\d+H)?(\d+M)?/);
    let hours = 0;
    let minutes = 0;
    if (match[1]) {
      hours = parseInt(match[1].replace("H", ""), 10);
    }
    if (match[2]) {
      minutes = parseInt(match[2].replace("M", ""), 10);
    }
    return hours + "ч. " + minutes + "мин. ";
  };