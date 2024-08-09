import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CategoryListItem from './CategoryListItem';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

function Category() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);

  const categories = [
    {
      icon: <PhoneIphoneIcon />,
      name: 'Phones',
    },
    {
      icon: <ComputerIcon />,
      name: 'Computers',
    },
    {
      icon: <WatchIcon />,
      name: 'SmartWatch',
    },
    {
      icon: <CameraAltIcon />,
      name: 'Camera',
    },
    {
      icon: <HeadphonesIcon />,
      name: 'Headphones',
    },
    {
      icon: <SportsEsportsIcon />,
      name: 'Gaming',
    },
    {
      icon: <CameraAltIcon />,
      name: 'Camera',
    },
    {
      icon: <HeadphonesIcon />,
      name: 'Headphones',
    },
    {
      icon: <SportsEsportsIcon />,
      name: 'Gaming',
    },
  ];

  return (
    <div>
      <h1 className="text-[#DB4444] border-l-8 pl-2 mt-16 rounded-t-md rounded-b-md border-l-[#DB4444] text-xl">
        Categories
      </h1>

      <h1 className="text-3xl font-semibold my-5">Browse By Category</h1>

      <div
        className="flex w-[80%] space-x-3 overflow-x-scroll scrollbar-hide mt-5"
        style={{ scrollbarWidth: 'none' }}
        {...events}
        ref={ref}
      >
        {categories.map((category) => {
          return (
            <CategoryListItem
              key={category.name}
              icon={category.icon}
              name={category.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;
