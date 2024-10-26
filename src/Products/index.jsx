/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndividualCategory } from '../apiFunction/FetchCategories';
import AllProduct from './AllProduct';

function Products() {
  const dispatch = useDispatch();
  const selectCategoryName = useSelector(
    (state) => state.selectCategory.selectCategory,
  );
  const categoryItems = useSelector((state) => state.CategoryProduct.items);
  const selectedCategory = useSelector(
    (state) => state.selectCategory.selectCategory,
  );
  useEffect(() => {
    dispatch(fetchIndividualCategory(selectCategoryName));
  }, [selectCategoryName]);

  return (
    <div className="w-full">
      {selectedCategory != '' && (
        <>
          <h1 className="mt-16 rounded-b-md rounded-t-md border-l-8 border-l-[#DB4444] pl-2 text-xl text-[#DB4444]">
            Browser by Categories
          </h1>
          <div className="flex flex-wrap">
            <AllProduct categoryItems={categoryItems} />
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
