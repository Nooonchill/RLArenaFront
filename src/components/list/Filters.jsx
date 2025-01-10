import React, { useState } from 'react';

const Filters = ({ filters, additionalFilters=[], activeButton, filterType, handleButtonClick, setFilterType }) => {

  return (
    <div className='flex flex-col gap-2'>
      <div className="flex flex-row gap-4 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleButtonClick(filter.id)}
            className={`h-[38px] py-0 font-medium border-2 rounded-full
              ${activeButton === filter.id
                ? 'border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise' 
                : 'bg-white border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise'}`}
          >
            {filter.title}
          </button>
        ))}
      </div>
      {additionalFilters.length !== 0 & activeButton !== 3  ? (
        <div className="relative">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="block px-4 bg-transparent h-[38px] border-2 w-max rounded-lg bg-white border-turquoise text-turquoise focus:text-turquoise hover:text-lightturquoise hover:border-lightturquoise appearance-none peer"
          >
            {additionalFilters.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      ) : (<div></div>)}
    </div>
  );
};

export default Filters;
