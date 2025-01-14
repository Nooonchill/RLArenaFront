import React from "react";


const FilesTable = ({ data }) => {

  return (
    <div className="flex flex-col items-center">
      <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-dark dark:text-lightwhiteturquoise mb-4">
        <thead className=" uppercase bg-lightwhiteturquoise dark:bg-blackblue">
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
          {data?.map((file, index) => (
            <tr key={file.id || index} className="odd:bg-white even:bg-gray-50 dark:odd:bg-darkblue dark:even:bg-grayblue">
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
