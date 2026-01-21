import React from 'react';
import { motion } from 'framer-motion';
import { HERO_BACKGROUND_FALLBACK_IMAGE } from '../constants'; // Import the fallback image

const Hero: React.FC = () => {
  const backgroundImage = HERO_BACKGROUND_FALLBACK_IMAGE;

  return (
    <section
      id="home"
      className="hidden md:flex relative h-screen min-h-[700px] items-center justify-center overflow-hidden pt-[96px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${HERO_BACKGROUND_FALLBACK_IMAGE}')` }}
      ></div>

      {/* Main Content */}
    </section>
  );
};

export default Hero;
