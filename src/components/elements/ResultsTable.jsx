import React, { useState } from "react";

const ResultsTable = ({ results, rows }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const changeTimeView = (timedelta) => {
    const match = timedelta.match(/PT(\d+H)?(\d+M)?/);
    let hours = 0;
    let minutes = 0;
    if (match[1]) {
      hours = parseInt(match[1].replace("H", ""), 10);
    }
    if (match[2]) {
      minutes = parseInt(match[2].replace("M", ""), 10);
    }
    return `${hours}ч. ${minutes}мин.`;
  };

  const sortedResults = [...results].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === "asc" ? 1 : -1;

    if (sortConfig.key === "place") {
      return direction * (parseInt(a.place, 10) - parseInt(b.place, 10));
    }
    if (sortConfig.key === "username") {
      return direction * a.username.localeCompare(b.username);
    }
    if (sortConfig.key === "time") {
      return direction * a.time.localeCompare(b.time);
    }
    if (sortConfig.key === "score") {
      return direction * (b.score - a.score);
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg m-auto max-w-[800px]">
      <table className="w-full text-sm text-left rtl:text-right text-dark">
        <thead className="text-xs text-dark uppercase bg-lightwhiteturquoise">
          <tr>
            <th
              scope="col"
              className="pl-6 py-3 cursor-pointer"
              onClick={() => handleSort("place")}
            >
              #
              <span className="inline-block ml-1 w-4 text-xs opacity-70">
                {sortConfig.key === "place" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort("username")}
            >
              Пользователь
              <span className="inline-block ml-1 w-4 text-xs opacity-70">
                {sortConfig.key === "username" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort("time")}
            >
              Время
              <span className="inline-block ml-1 w-4 text-xs opacity-70">
                {sortConfig.key === "time" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort("score")}
            >
              Оценка
              <span className="inline-block ml-1 w-4 text-xs opacity-70">
                {sortConfig.key === "score" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.slice(0, rows).map((result, rowIndex) => (
            <tr
              key={rowIndex}
              className="odd:bg-white even:bg-gray-50"
            >
              <th
                scope="row"
                className="pl-6 py-4 font-medium text-dark whitespace-nowrap"
              >
                {result.place}
              </th>
              <td className="px-6 py-4">
                {result.username}
              </td>
              <td className="px-6 py-4">
                {changeTimeView(result.time)}
              </td>
              <td className="px-6 py-4">
                {result.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
