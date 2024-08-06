import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function HomePage() {
  return (
    <div>
      <Header />
      {/* Adjust the margin to accommodate the sidebar width */}
      <main style={{ marginLeft: 250, padding: '20px' }}>
        <Sidebar />
      </main>
    </div>
  );
}

export default HomePage;
