import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
function HomePage({ setIsLoading }) {
  return (
    <div>
      <HeroBanner/>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}

export default HomePage;
