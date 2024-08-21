import { CiSearch } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';

function Header() {
  const menu = ['Home', 'About', 'Contact', 'Sign up'];
  return (
    <div className="flex items-center justify-between border-b-2 bg-white px-28 p-5 shadow-md">
      <div>
        <h1 className="text-3xl font-semibold">Exclusive</h1>
      </div>

      <div className="flex space-x-12">
        {menu.map((item, index) => (
          <span key={index}>{item}</span>
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

        <CiHeart />
        <IoCartOutline />
        <FaRegUser />
      </div>
    </div>
  );
}

export default Header;
