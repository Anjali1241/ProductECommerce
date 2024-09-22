import React from 'react';

function Button({ children, onClick, variant }) {
  return (
    <div
      className={`inline-block cursor-pointer bg-[#DB4444] px-4 py-2 text-white ${variant}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
