import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';

function Header() {
  const menu = ['Home', 'About', 'Contact', 'Sign up'];
  return (
    <div className="flex justify-between bg-white items-center z-[-10] px-28 pt-5 pb-5 shadow-sm border-b-2">
      <div>
        <h1 className="text-3xl font-semibold">Exclusive</h1>
      </div>

      <div className="flex space-x-12">
        {menu.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-5">
        <div className="bg-[#F5F5F5] flex items-center overflow-hidden rounded-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="py-2 px-4 w-full bg-[#F5F5F5] focus:outline-none"
          />
          <CiSearch className="mr-4" />
        </div>

        <CiHeart />
        <IoCartOutline />
      </div>
    </div>
  );
}

export default Header;
