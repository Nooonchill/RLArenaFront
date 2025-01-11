import React, { useState } from 'react';

const Filters = ({ filters, additionalFilters=[], activeButton, filterType, handleButtonClick, setFilterType }) => {

  return (
    <div className='flex flex-col gap-2'>
      <div className="flex flex-row gap-4 flex-wrap mb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleButtonClick(filter.id)}
            className={`h-[38px] py-0 font-medium border-2 rounded-full
              ${activeButton === filter.id
                ? 'border-none font-medium bg-turquoise dark:bg-lightwhiteturquoise text-white dark:text-dark hover:bg-lightturquoise ' 
                : 'bg-transparent border-turquoise dark:border-lightwhiteturquoise dark:text-lightwhiteturquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise dark:hover:border-addwhiteturquoise dark:hover:text-addwhiteturquoise'}`}
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
            className="block cursor-pointer px-4 bg-transparent h-[38px] border-2 w-max rounded-lg border-turquoise dark:border-lightwhiteturquoise text-turquoise dark:text-lightwhiteturquoise focus:text-turquoise dark:focus:bg-dark hover:text-lightturquoise hover:border-lightturquoise dark:hover:border-addwhiteturquoise dark:hover:text-addwhiteturquoise appearance-none peer"
          >
            {additionalFilters.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default Filters;
