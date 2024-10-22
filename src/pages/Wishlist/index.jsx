/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button';
import AllProduct from '../../Products/AllProduct';
import { Link } from 'react-router-dom';
import { moveToCart } from '../../slices/productSlice';

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistSelector = useSelector((state) => state.products.wishlist);

  return (
    <div className="max-w-7xl px-8">
      <div className="mx-auto flex w-full items-center justify-between py-4">
        <div className="text-lg font-semibold">
          Wishlist ({wishlistSelector.length})
        </div>
        <Button
          aria-label="Move all items to bag"
          onClick={() => {
            dispatch(moveToCart(wishlistSelector));
          }}
        >
          Move All to Bag
        </Button>
      </div>

      <div className="flex flex-wrap gap-5">
        {wishlistSelector.length > 0 ? (
          <AllProduct categoryItems={wishlistSelector} />
        ) : (
          <div className="flex w-full flex-col items-center justify-center [&>*]:my-1">
            <h1 className="text-xl font-semibold text-[#DB4444]">
              Your Wishlist is empty!
            </h1>
            <p>Seems like you don't have wishes here.</p>
            <p>Make a Wish!</p>
            <Button>
              <Link to={'/'}>Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
