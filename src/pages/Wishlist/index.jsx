import Button from '../../common/Button';
import Products from '../../components/Products';

function Wishlist() {
  return (
    <div className="max-w-7xl px-8">
      <div className="mx-auto flex w-full items-center justify-between py-4">
        <div className="text-lg font-semibold">Wishlist (4)</div>
        <Button aria-label="Move all items to bag">Move All to Bag</Button>
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
}

export default Wishlist;
