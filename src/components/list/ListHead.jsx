import React from "react";


function ListHead({title}) {
  return (
      <div className="bg-lightwhiteturquoise dark:bg-dark p-6 rounded-3xl mb-6">
        <h1 className="text-dark dark:text-lightwhiteturquoise text-4xl">{title}</h1>
      </div>
  );
}

export default ListHead;
