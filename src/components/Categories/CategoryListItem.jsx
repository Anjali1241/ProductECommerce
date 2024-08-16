import React from 'react';

function CategoryListItem({ icon, name }) {
  return (
    <div
      key={name}
      className="[&>*]:py-1 flex flex-col justify-center items-center border-2 border-slate-300 p-6 m-3 cursor-pointer hover:bg-[#DB4444] transition-all duration-300 hover:text-white"
    >
      <p>{icon}</p>
      <p>{name}</p>
    </div>
  );
}

export default CategoryListItem;
