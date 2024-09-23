import Sidebar from '../../components/Sidebar';
import Offers from '../../components/Offers';
import Header from '../../components/Header';
import Category from '../../components/Categories';
import Perks from '../../components/Perks';
import Footer from '../../components/Footer';
import Products from '../../Products';
import AllProducts from '../AllProducts';

function HomePage() {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Offers />
        <Header />
      </div>
      <main style={{ marginLeft: 250 }}>
        <Sidebar />
        {/* <Hero /> */}
        <Category />
        <Products />
        <AllProducts/>
        <Perks />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
