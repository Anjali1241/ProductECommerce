import Button from '../../common/Button';
import { RiDeleteBin6Line } from 'react-icons/ri';

function Products() {
  const addToCart = () => {
    console.log('add to cart');
  };
  
  return (
    <div className="relative inline-block rounded-lg p-5 shadow-lg">
      <div className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-white p-2">
        <RiDeleteBin6Line className="text-gray-700" />
      </div>

      <img src="/logo/logo.png" alt="logo" className="h-52 w-52 object-cover" />
      <Button
        variant="w-full bg-black text-center text-white"
        onClick={addToCart}
      >
        Add to cart
      </Button>
      <p className="py-1 text-xl font-bold">Product title</p>
      <p className="font-semibold text-[#DB4444]">$290</p>
    </div>
  );
}

export default Products;
