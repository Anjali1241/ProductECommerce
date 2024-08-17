import React from 'react';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen [&>*]:m-5">
      <h1 className="text-8xl font-semibold">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Button>
        <Link to={'/'}>Back to home page</Link>
      </Button>
    </div>
  );
}

export default NotFound;
