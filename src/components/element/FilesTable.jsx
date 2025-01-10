import React from "react";


const FilesTable = ({details: data}) => {

  return (
    <div className="flex flex-col items-center">
      <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-dark dark:text-lightwhiteturquoise mb-4">
        <thead className=" uppercase bg-lightwhiteturquoise dark:bg-blackturquoise">
          <tr>
            <th scope="col" className="px-6 py-3">
              Файл
            </th>
            <th scope="col" className="px-6 py-3">
              Размер
            </th>
            <th scope="col" className="px-6 py-3">
              Описание
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((file) => (
            <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              <th scope="row" className="pl-6 py-4 font-mediumwhitespace-nowrap ">
                {file.name}
              </th>
              <td className="px-6 py-4">
                {file.size}
              </td>
              <td className="px-6 py-4">
                {file.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="max-w-[100px] h-[38px] py-0 border-none font-medium bg-turquoise dark:bg-lightwhiteturquoise text-white dark:text-dark hover:bg-lightturquoise dark:hover:bg-whiteturquoise active:bg-darkturquoise w-full rounded-full">
          Скачать
      </button>
    </div> 
  );
};

export default FilesTable;
