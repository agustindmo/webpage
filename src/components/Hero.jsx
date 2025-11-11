import React from 'react';

// Array with 30 images
const showcaseImages = [
  'https://picsum.photos/400/500?random=10', 'https://picsum.photos/400/300?random=11',
  'https://picsum.photos/300/400?random=12', 'https://picsum.photos/400/400?random=13',
  'https://picsum.photos/300/300?random=14', 'https://picsum.photos/500/400?random=15',
  'https://picsum.photos/400/600?random=16', 'https://picsum.photos/400/500?random=17',
  'https://picsum.photos/300/300?random=18', 'https://picsum.photos/400/400?random=19',
  'https://picsum.photos/300/400?random=20', 'https://picsum.photos/400/300?random=21',
  'https://picsum.photos/400/400?random=22', 'https://picsum.photos/300/500?random=23',
  'https://picsum.photos/400/300?random=24', 'https://picsum.photos/500/500?random=25',
  'https://picsum.photos/300/300?random=26', 'https://picsum.photos/400/600?random=27',
  'https://picsum.photos/500/300?random=28', 'https://picsum.photos/300/400?random=29',
  'https://picsum.photos/400/500?random=30', 'https://picsum.photos/300/300?random=31',
  'https://picsum.photos/400/400?random=32', 'https://picsum.photos/500/400?random=33',
  'https://picsum.photos/300/400?random=34', 'https://picsum.photos/400/300?random=35',
  'https://picsum.photos/400/500?random=36', 'https://picsum.photos/300/400?random=37',
  'https://picsum.photos/400/400?random=38', 'https://picsum.photos/500/300?random=39',
];

// Helper array for 30 staggered delays
const delays = [
  '0s', '0.2s', '0.4s', '0.6s', '0.8s', '1s', '1.2s', '1.4s', '1.6s', '1.8s',
  '2s', '2.2s', '2.4s', '2.6s', '2.8s', '3s', '3.2s', '3.4s', '3.6s', '3.8s',
  '4s', '4.2s', '4.4s', '4.6s', '4.8s', '5s', '5.2s', '5.4s', '5.6s', '5.8s'
];

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* 1. Floating Images Canvas (Z-10) */}
      <div className="absolute inset-0 z-10">
        
        {/* --- Using animate-pulse with new, more even positions --- */}
        <img src={showcaseImages[0]} alt="Showcase 1" className="absolute top-[5%] left-[5%] w-48 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[0] }} />
        <img src={showcaseImages[1]} alt="Showcase 2" className="absolute top-[10%] left-[30%] w-52 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[1] }} />
        <img src={showcaseImages[2]} alt="Showcase 3" className="absolute top-[8%] left-[55%] w-40 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[2] }} />
        <img src={showcaseImages[3]} alt="Showcase 4" className="absolute top-[12%] left-[75%] w-56 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[3] }} />
        <img src={showcaseImages[4]} alt="Showcase 5" className="absolute top-[15%] right-[5%] w-44 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[4] }} />
        
        <img src={showcaseImages[5]} alt="Showcase 6" className="absolute top-[30%] left-[15%] w-64 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[5] }} />
        <img src={showcaseImages[6]} alt="Showcase 7" className="absolute top-[35%] left-[40%] w-40 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[6] }} />
        <img src={showcaseImages[7]} alt="Showcase 8" className="absolute top-[32%] left-[65%] w-44 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[7] }} />
        <img src={showcaseImages[8]} alt="Showcase 9" className="absolute top-[40%] right-[10%] w-52 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[8] }} />
        <img src={showcaseImages[9]} alt="Showcase 10" className="absolute top-[45%] left-[5%] w-48 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[9] }} />
        
        <img src={showcaseImages[10]} alt="Showcase 11" className="absolute top-[50%] left-[25%] w-36 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[10] }} />
        <img src={showcaseImages[11]} alt="Showcase 12" className="absolute top-[55%] left-[50%] w-52 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[11] }} />
        <img src={showcaseImages[12]} alt="Showcase 13" className="absolute top-[52%] left-[75%] w-36 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[12] }} />
        <img src={showcaseImages[13]} alt="Showcase 14" className="absolute top-[60%] right-[5%] w-40 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[13] }} />
        <img src={showcaseImages[14]} alt="Showcase 15" className="absolute top-[65%] left-[10%] w-48 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[14] }} />

        <img src={showcaseImages[15]} alt="Showcase 16" className="absolute top-[70%] left-[30%] w-56 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[15] }} />
        <img src={showcaseImages[16]} alt="Showcase 17" className="absolute top-[75%] left-[55%] w-44 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[16] }} />
        <img src={showcaseImages[17]} alt="Showcase 18" className="absolute top-[72%] left-[80%] w-40 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[17] }} />
        <img src={showcaseImages[18]} alt="Showcase 19" className="absolute top-[80%] right-[5%] w-48 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[18] }} />
        <img src={showcaseImages[19]} alt="Showcase 20" className="absolute top-[85%] left-[5%] w-52 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[19] }} />
        
        <img src={showcaseImages[20]} alt="Showcase 21" className="absolute bottom-[5%] left-[20%] w-36 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[20] }} />
        <img src={showcaseImages[21]} alt="Showcase 22" className="absolute bottom-[8%] left-[40%] w-44 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[21] }} />
        <img src={showcaseImages[22]} alt="Showcase 23" className="absolute bottom-[10%] left-[60%] w-40 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[22] }} />
        <img src={showcaseImages[23]} alt="Showcase 24" className="absolute bottom-[5%] left-[75%] w-48 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[23] }} />
        <img src={showcaseImages[24]} alt="Showcase 25" className="absolute bottom-[2%] right-[2%] w-56 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[24] }} />
        
        <img src={showcaseImages[25]} alt="Showcase 26" className="absolute top-[20%] left-[2%] w-44 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[25] }} />
        <img src={showcaseImages[26]} alt="Showcase 27" className="absolute top-[40%] left-[80%] w-40 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[26] }} />
        <img src={showcaseImages[27]} alt="Showcase 28" className="absolute top-[60%] left-[45%] w-48 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[27] }} />
        <img src={showcaseImages[28]} alt="Showcase 29" className="absolute top-[80%] left-[65%] w-36 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[28] }} />
        <img src={showcaseImages[29]} alt="Showcase 30" className="absolute top-[5%] left-[45%] w-52 rounded-lg shadow-2xl animate-pulse" style={{ animationDelay: delays[29] }} />

      </div>

      {/* 2. Darkening Overlay (Z-15) */}
      <div className="absolute inset-0 z-15 bg-black/50"></div>

      {/* 3. Hero Text (Z-20) */}
      <div className="relative z-20 text-center text-white p-4">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          Capturing Moments, Creating Art
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Welcome to the portfolio of Jane Doe, where every picture tells a story.
        </p>
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