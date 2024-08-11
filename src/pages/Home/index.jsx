import React from 'react';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import Offers from '../../components/Offers';
import Header from '../../components/Header';

function HomePage() {
  return (
    <div>
      <main style={{ marginLeft: 250, padding: '20px' }}>
        <Offers />
        <Header />
        <Sidebar />
        <Hero />
        <p>Helllo</p>
      </main>
    </div>
  );
}

export default HomePage;
