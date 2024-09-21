/* eslint-disable react/prop-types */

function ProductListItems({ ProductDetail }) {

  return (
    <div className="m-3 h-full w-60 border-2 border-solid border-gray-200 p-3 shadow-md hover:translate-y-2 hover:shadow-slate-600">
      <img
        src={ProductDetail?.image}
        className="h-36 w-full"
      />
      <div className="text-xl font-bold truncate">{ProductDetail?.title}</div>
      <div className="text-md font-semibold">Price: {ProductDetail?.price}</div>
      <div className="mt-2 flex w-full justify-between">
        <button className="w-2/2 rounded-md bg-neutral-500 p-2">
          Add to Cart
        </button>
        <button className="w-1/2 rounded-md bg-neutral-500 p-1">Buy</button>
      </div>
    </div>
  );
}

export default ProductListItems;
