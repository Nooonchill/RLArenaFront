export const getFiltered = ({
  items, // Список элементов для фильтрации и сортировки
  savedItems = [], // Массив ID сохранённых элементов
  createdItems = [], // Массив ID созданных элементов
  activeButton, // Активная кнопка фильтрации
  filterType, // Тип фильтрации (например, "Открытые", "Завершенные")
  activeSort, // Тип сортировки (1, 2, 3...)
  reverseSort, // Флаг реверсивной сортировки
  customFilters = [], // Дополнительные фильтры
  dateFields = { start: "startDate", end: "endDate" }, // Поля дат в объектах
}) => {
  const now = new Date();
  // Фильтрация по кнопке
  let filtered =
    activeButton === 2
      ? items.filter(
          (item) => savedItems.includes(item.id) || createdItems.includes(item.id)
        )
      : items;

  // Фильтрация по типу (если указано)
  if (filterType) {
    filtered = filtered.filter((item) => {
      
      
      const start = new Date(item[dateFields.start]?.split("-").reverse().join("-"));
      const end = new Date(item["endDate"]?.split("-").reverse().join("-"));
      if (filterType === "Открытые") {
        return start <= now && end >= now;
      } else if (filterType === "Скоро начнутся") {
        return start > now;
      } else if (filterType === "Завершенные") {
        return end < now;
      }
      return true;
    });
  }

  // Применение кастомных фильтров (если есть)
  customFilters.forEach((filter) => {
    filtered = filtered.filter(filter);
  });

  // Сортировка
  if (activeSort) {
    filtered.sort((a, b) => {
      let comparison = 0;

      if (activeSort === 1) {
        const dateA = new Date(a[dateFields.start]?.split("-").reverse().join("-"));
        const dateB = new Date(b[dateFields.start]?.split("-").reverse().join("-"));
        comparison = -(dateA - dateB);
      } else if (activeSort === 2) {
        comparison = b.added - a.added;
      } else if (activeSort === 3) {
        comparison = b.rate - a.rate;
      }

      return reverseSort ? -comparison : comparison;
    });
  }

  return filtered;
};
