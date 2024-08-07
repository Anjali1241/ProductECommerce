import React from 'react';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';

function HomePage() {
  return (
    <div>
      {/* Adjust the margin to accommodate the sidebar width */}
      <main style={{ marginLeft: 250, padding: '20px' }}>
        <Sidebar />
        <Hero />
      </main>
    </div>
  );
}

export default HomePage;
