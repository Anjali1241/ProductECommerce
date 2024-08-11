import React from 'react';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import Offers from '../../components/Offers';
import Header from '../../components/Header';
import Perks from '../../components/Perks';

function HomePage() {
  return (
    <div>
      <main style={{ marginLeft: 250, padding: '20px' }}>
        <Offers />
        <Header />
        <Sidebar />
        <Hero />
        <Perks/>
      </main>
    </div>
  );
}

export default HomePage;
