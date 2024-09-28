import React from 'react';
import logoOne from '../assets/g1.jpg'; // Assuming you're using multiple local assets, you would import them similarly
import logoTwo from '../assets/g2.jpg'; // Example of a second image import
import logoThree from '../assets/g3.jpg'; // Example of a second image import
import logoFour from '../assets/g4.jpg'; // Example of a second image import
import logoFive from '../assets/g5.jpg'; // Example of a second image import
import logosix from '../assets/g6.jpg'

const Gallery = () => {
  // Assuming you want to use multiple local images
  const list = [
    logoOne,
    logoTwo, 
    logoThree,
    logoFour,
  logoFive,logosix
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {list.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
