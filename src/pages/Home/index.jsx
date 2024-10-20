import Sidebar from '../../components/Sidebar';
import Offers from '../../components/Offers';
import Header from '../../components/Header';
import Category from '../../components/Categories';
import Footer from '../../components/Footer';
import Perks from '../../components/Perks';
import Products from '../../Products';
import AllProducts from '../AllProducts';

function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <Category />
      <Products />
      <AllProducts />
      <Perks />
    </>
  );
}

export default HomePage;
