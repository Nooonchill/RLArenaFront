import React from "react";
import Search from '../../assets/icons/Search.svg'


function ListSearch() {

  return (
    <form className="max-w-[540px]  w-full bg-none">
      <div className="relative h-[38px]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search alt="Поиск" className="cursor-pointer" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full h-[38px] p-4 ps-11 text-base text-dark bg-white focus:outline-none focus:ring-0 placeholder-dark border-b-2 border-turquoise"
          placeholder="Поиск по соревнованиям..."
          required
        />
      </div>
    </form>
  );
}

export default ListSearch;
