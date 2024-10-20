import Header from '../../components/Header';
import Offers from '../../components/Offers';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

function Base() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Offers />
        <Header />
      </div>
      <main style={{ marginLeft: 250 }}>
        <Sidebar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Base;
