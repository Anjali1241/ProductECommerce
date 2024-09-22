/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import Button from '../common/Button';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../slices/productSlice';

function ProductListItems({ ProductDetail }) {
  const pathname = useLocation();

  const dispatch = useDispatch();
  const categoryItems = useSelector((state) => state.CategoryProduct.items);
  const wishlist = useSelector((state) => state.products.wishlist);

  const handleWishlist = function (id) {
    const wishlistItems = categoryItems.find((ele) => {
      return ele.id === id;
    });

    if (wishlist.includes(wishlistItems)) {
      alert('Item is already exits in wishlist');
      return;
    }
    
    dispatch(addToWishlist(ProductDetail));
  };

  return (
    <div className="relative m-3 h-full min-h-[25rem] w-60 scale-95 transform rounded-lg border-2 border-solid border-gray-200 p-3 transition-transform duration-300 hover:scale-100 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-white p-2">
        {pathname.pathname === '/wishlist' ? (
          <RiDeleteBin6Line className="cursor-pointer text-gray-700" />
        ) : (
          <FaRegHeart
            className="cursor-pointer text-gray-700"
            onClick={handleWishlist.bind(null, ProductDetail.id)}
          />
        )}
      </div>

      <img src={ProductDetail?.image} className="h-36 w-full" />
      <div className="py-1 text-lg font-bold">{ProductDetail?.title}</div>
      <div className="text-lg font-semibold text-[#DB4444]">
        ${ProductDetail?.price}
      </div>
      <div className="mt-2 flex w-full justify-between">
        <Button className="w-2/2 rounded-md bg-neutral-500 p-2">
          Add to Cart
        </Button>
        <Button className="w-1/2 rounded-md bg-neutral-500 p-1">Buy</Button>
      </div>
    </div>
  );
}

export default ProductListItems;
