/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import ProductListItems from './ProductListItems';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndividualCategory } from '../apiFunction/FetchCategories';

function Products() {
  const selectCategoryName = useSelector(
    (state) => state.selectCategory.selectCategory,
  );
  const categoryItems = useSelector((state) => state.CategoryProduct.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIndividualCategory(selectCategoryName));
  }, [selectCategoryName]);

  return (
    <div className="w-full">
      <h1 className="mt-16 rounded-b-md rounded-t-md border-l-8 border-l-[#DB4444] pl-2 text-xl text-[#DB4444]">
        Browser by Categories
      </h1>
      <div className="flex flex-wrap">
        {categoryItems?.map((ele) => (
          <ProductListItems ProductDetail={ele} />
        ))}
      </div>
    </div>
  );
}

export default Products;
