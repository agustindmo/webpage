import React from 'react';

const showcaseImages = [
  'https://picsum.photos/400/500?random=10',
  'https://picsum.photos/400/300?random=11',
  'https://picsum.photos/300/400?random=12',
  'https://picsum.photos/400/400?random=13',
];

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 z-10">
        <img 
          src={showcaseImages[0]} 
          alt="Showcase photo 1"
          className="absolute top-10 left-1/4 w-48 rounded-lg shadow-2xl opacity-0 animate-float-fade-1"
        />
        <img 
          src={showcaseImages[1]} 
          alt="Showcase photo 2"
          className="absolute bottom-1/4 right-1/3 w-64 rounded-lg shadow-2xl opacity-0 animate-float-fade-2"
        />
        <img 
          src={showcaseImages[2]} 
          alt="Showcase photo 3"
          className="absolute top-1/3 right-1/4 w-40 rounded-lg shadow-2xl opacity-0 animate-float-fade-3"
        />
        <img 
          src={showcaseImages[3]} 
          alt="Showcase photo 4"
          className="absolute bottom-16 left-[15%] w-56 rounded-lg shadow-2xl opacity-0 animate-float-fade-4"
        />
      </div>

      <div className="absolute inset-0 z-15 bg-black/50"></div>

      <div className="relative z-20 text-center text-white p-4">
        {/* These text sizes are larger */}
        <h1 className="text-5xl font-extold tracking-tight md:text-7xl">
          Capturing Moments, Creating Art
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Welcome to the portfolio of Jane Doe, where every picture tells a story.
        </p>
        
        {/* This is now a styled button */}
        <a 
          href="#portfolio"
          className="mt-8 inline-block rounded-md bg-brand-pink-dark px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;