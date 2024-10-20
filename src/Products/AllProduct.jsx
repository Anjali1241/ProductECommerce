/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import ProductListItems from './ProductListItems';
import ProductSkeleton from '../common/Skeleton';

function AllProduct({ categoryItems }) {
  const isLoading = useSelector((state) => state.CategoryProduct.status);

  return (
    <>
      {isLoading === 'pending' && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }, (_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}
      {categoryItems.map((ele, index) => (
        <ProductListItems key={index} ProductDetail={ele} />
      ))}
    </>
  );
}

export default AllProduct;
