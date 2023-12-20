import React from 'react';
import backgroundImage from './assets/images/heroImg.png';
import overlayImage from './assets/images/heroImg2.png';
import playStoreImage from './assets/images/toppng 1.png'
import appleStoreImage from './assets/images/PngItem_1144050 2.png'


const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Overlay Image to the Right */}
      <img className="absolute right-0 top-0 h-full z-10" src={overlayImage} alt="Overlay" />

      {/* Text to the Left */}
      <div className="relative z-20 text-left text-black w-[23%] ml-28">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gray-400">Revolutionize</span>{' '}
          Your Farming with <span className="text-gray-400">Livestock App</span>
        </h1>
        <div className="flex gap-2">
          <img src={playStoreImage} alt="play store " />
          <img src={appleStoreImage} alt="apple store " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
