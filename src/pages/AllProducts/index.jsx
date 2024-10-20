/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from 'react-redux';
import ProductListItems from '../../Products/ProductListItems';
import { useEffect } from 'react';
import { fetchAllProducts } from '../../apiFunction/FetchCategories';

function AllProducts() {
  const productsItems = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div className="w-full">
      <h1 className="mt-16 rounded-b-md rounded-t-md border-l-8 border-l-[#DB4444] pl-2 text-xl text-[#DB4444]">
        All Products
      </h1>
      <div className="flex flex-wrap">
        {productsItems?.map((ele) => (
          <ProductListItems ProductDetail={ele} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
