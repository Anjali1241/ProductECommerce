import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useEffect, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import CategoryListItem from './CategoryListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../apiFunction/FetchCategories';
import { selectCategoryName } from '../../slices/globalVariablesSlice';

function Category() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.categoriesApi.items);
  const status = useSelector((state) => state.categoriesApi.status);

  useEffect(() => {
    if (status == 'idle') {
      dispatch(fetchCategories());
    }
  }, []);
  const selectCategoryy = (text) => {
    dispatch(selectCategoryName(text));
  };

  return (
    <div>
      <h1 className="mt-16 rounded-b-md rounded-t-md border-l-8 border-l-[#DB4444] pl-2 text-xl text-[#DB4444]">
        Categories
      </h1>

      <h1 className="my-5 text-3xl font-semibold">Browse By Category</h1>

      <div
        className="scrollbar-hide mt-5 flex w-full space-x-3 overflow-x-scroll"
        style={{ scrollbarWidth: 'none' }}
        {...events}
        ref={ref}
      >
        {items.map((item, id) => {
          return (
            <div onClick={selectCategoryy.bind(null, item)}>
              <CategoryListItem key={id} name={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
