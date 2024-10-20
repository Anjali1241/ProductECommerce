/* eslint-disable react/prop-types */
function CategoryListItem({  name, id }) {
  return (
    <div
      key={id}
      className="m-3 flex cursor-pointer flex-col items-center justify-center border-2 border-slate-300 p-6 transition-all duration-300 hover:bg-[#DB4444] hover:text-white [&>*]:py-1"
    >
      <p>{name}</p>
    </div>
  );
}

export default CategoryListItem;
