import React from 'react';

const About = () => {
  return (
    // Adds padding
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* This grid layout fixes the overlap */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          <div className="flex justify-center">
             <img 
                src="https://picsum.photos/400/500?random=7" 
                alt="Portrait of the photographer" 
                className="h-[500px] w-full max-w-sm rounded-lg object-cover shadow-lg" 
              />
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              About Me
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Hi, I'm Jane! I'm a passionate photographer with over 10 years of
              experience in turning fleeting moments into timeless memories. My
              style is authentic, vibrant, and filled with emotion.
            </p>
            <p className="text-lg text-gray-600">
              My journey began with a simple film camera, and since then, I've
              dedicated myself to mastering the art of light and shadow. I
              believe that great photography is about more than just a picture;
              it's about capturing a feeling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;