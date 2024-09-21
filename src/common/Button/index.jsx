import React from 'react';

function Button({ children, onClick, variant }) {
  return (
    <div
      className={`bg-[#DB4444] inline-block text-white px-4 py-2 ${variant}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
