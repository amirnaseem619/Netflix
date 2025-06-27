import React from 'react';
import backgroundImage from '../Images/background.jfif'; // Import the image
import HeroSection from '../Components/HeroSection';
import TextCards from '../Components/TextCards';

import VideoCards from '../Components/VideoCards';
import FAQ from '../Components/FAQ';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(80deg, black, transparent), url(${backgroundImage})`, // Correct way to use linear-gradient and image
        backgroundSize: 'cover', // Make the background cover the whole div
        backgroundPosition: 'center', // Center the background image
        height: '100%' // Ensure it covers the full viewport height
      }}
    >
      <HeroSection />
      < VideoCards />
      < TextCards />
      <FAQ/>
    </div>
  );
}

export default Home;
