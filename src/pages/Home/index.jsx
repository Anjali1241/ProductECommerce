import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import Offers from '../../components/Offers';
import Header from '../../components/Header';
import Category from '../../components/Categories';
import Perks from '../../components/Perks';

function HomePage() {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Offers />
        <Header />
      </div>
      <main style={{ marginLeft: 250 }}>
        <Sidebar />
        <Hero />
        <Category />
        <Perks />
      </main>
    </div>
  );
}

export default HomePage;
