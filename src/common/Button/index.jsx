import React from 'react';

function Button({ children, onClick }) {
  return (
    <div
      className="bg-[#DB4444] inline-block text-white px-4 py-2"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
