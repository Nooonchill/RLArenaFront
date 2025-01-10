import React, { useState } from "react";

const ResultsTable = ({ results, rows, columns }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Сортировка данных
  const sortedResults = [...results].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === "asc" ? 1 : -1;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === "string") {
      return direction * aValue.localeCompare(bValue);
    } else if (typeof aValue === "number") {
      return direction * (aValue - bValue);
    } else {
      return 0;
    }
  });

  // Обработчик клика по заголовку для сортировки
  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
      <table className="w-full text-sm text-left rtl:text-right text-dark dark:text-lightwhiteturquoise">
        <thead className="text-xs uppercase bg-lightwhiteturquoise dark:bg-blackturquoise">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort(column.key)}
              >
                {column.label}
                <span className="inline-block ml-1 w-4 text-xs opacity-70">
                  {sortConfig.key === column.key &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedResults.slice(0, rows).map((result, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4"
                >
                  {column.format ? column.format(result[column.key]) : result[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default ResultsTable;
