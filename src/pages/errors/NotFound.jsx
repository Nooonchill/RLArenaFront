import React from 'react';
import Error from '../../assets/icons/ban.svg';

const NotFound = () => {
  return (
    <div className='flex justify-around h-[75vh] items-center text-dark dark:text-lightwhiteturquoise'>
      <div className='flex flex-row gap-2 items-start'>
        <Error className='mt-2 stroke-turquoise' />
        <div className='flex flex-col gap-4 '>
          <h1><span className='text-turquoise'>404 </span><span> Страница не найдена</span></h1>
          <p>Кажется, мы не можем найти эту страницу.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
