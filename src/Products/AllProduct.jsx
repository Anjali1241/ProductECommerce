/* eslint-disable react/prop-types */
import ProductListItems from './ProductListItems';

function AllProduct({ categoryItems }) {
  return (
    <>
      {categoryItems.map((ele, index) => (
        <ProductListItems key={index} ProductDetail={ele} />
      ))}
    </>
  );
}

export default AllProduct;
