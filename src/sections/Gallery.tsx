import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    alt: 'Shop Front',
    category: 'Shop',
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    alt: 'Sweet Display',
    category: 'Sweets',
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    alt: 'Fresh Gulab Jamun',
    category: 'Sweets',
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    alt: 'Burger Preparation',
    category: 'Fast Food',
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    alt: 'Special Falooda',
    category: 'Drinks',
  },
  {
    id: 6,
    src: '/images/gallery-6.jpg',
    alt: 'Customer Service',
    category: 'Shop',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
            Our Gallery
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-red mt-2">
            Glimpses of Shah Sweets
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a look at our shop, our delicious offerings, and the love we put into everything
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative ${
                index === 0 || index === 5 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const fallbacks = [
                      '1563729784474-d77dbb933a9e',
                      '1601050690597-df05624f40c4',
                      '1568901346375-23c9450c58cd',
                      '1551782450-a2132b4ba21d',
                      '1544145945-f90425340c7e',
                      '1555396273-367ea4eb4db5',
                    ];
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${fallbacks[index]}?w=600&q=80`;
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-deep-red/0 group-hover:bg-deep-red/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-deep-red" />
                    </div>
                  </div>
                </div>
                {/* Category Tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-white/90 text-deep-red text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&q=80';
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
