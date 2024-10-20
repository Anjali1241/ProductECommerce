import { CiSearch } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

function Header() {
  const wishlistSelector = useSelector((state) => state.products.wishlist);

  const menu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
    {
      name: 'Sign up',
      link: '/signup',
    },
  ];
  // const menu = ['Home', 'About', 'Contact', 'Sign up'];
  return (
    <div className="flex items-center justify-between border-b-2 bg-white p-5 px-28 shadow-md">
      <div>
        <h1 className="text-3xl font-semibold">Exclusive</h1>
      </div>

      <div className="flex space-x-12">
        {menu.map((item, index) => (
          <Link key={index} to={item.link}>
            <span className="cursor-pointer hover:text-[#DB4444]">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-5">
        <div className="flex items-center overflow-hidden rounded-md bg-[#F5F5F5]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-[#F5F5F5] px-4 py-2 focus:outline-none"
          />
          <CiSearch className="mr-4" />
        </div>

        <Link to={'/wishlist'}>
          <Badge
            badgeContent={wishlistSelector.length}
            color="primary"
            sx={{
              '& .MuiBadge-standard': {
                backgroundColor: '#DB4444',
              },
            }}
          >
            <FaRegHeart className="text-xl" />
          </Badge>
        </Link>
        <IoCartOutline />
        <FaRegUser />
      </div>
    </div>
  );
}

export default Header;
