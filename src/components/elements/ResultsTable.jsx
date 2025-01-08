import React from "react";


const ResultsTable = ({results}) => {

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
    return hours + "ч. " + minutes + "мин. ";
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg m-auto max-w-[800px]">
      <table className="w-full text-sm text-left rtl:text-right text-dark">
        <thead className="text-xs text-dark uppercase bg-lightwhiteturquoise">
          <tr>
            <th scope="col" className="pl-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Пользователь
            </th>
            <th scope="col" className="px-6 py-3">
              Время
            </th>
            <th scope="col" className="px-6 py-3">
              Оценка
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr className="odd:bg-white even:bg-gray-50">
              <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
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
