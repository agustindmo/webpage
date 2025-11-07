import React from 'react';

const portfolioItems = [
  { id: 1, title: 'Weddings', img: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'Portraits', img: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Nature', img: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Events', img: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Street', img: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Commercial', img: 'https://picsum.photos/600/400?random=6' },
];

const Portfolio = () => {
  return (
    // Adds padding and the green background
    <section id="portfolio" className="py-20 bg-brand-green">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Adds text styling to the title */}
        <h2 className="mb-12 text-center text-4xl font-bold text-brand-green-dark">
          My Portfolio
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <a 
              key={item.id} 
              href="#" 
              className="group relative block overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 text-transparent" 
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;