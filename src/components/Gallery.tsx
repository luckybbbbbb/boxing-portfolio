import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'SVE' },
    { id: 'training', label: 'TRENINZI' },
    { id: 'fights', label: 'BORBE' },
    { id: 'lifestyle', label: 'LIFESTYLE' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/4761354/pexels-photo-4761354.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'training',
      title: 'Intenzivan trening',
      isVideo: false
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fights',
      title: 'Spektakularan meč',
      isVideo: false
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/4754147/pexels-photo-4754147.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'training',
      title: 'Rad na vreći',
      isVideo: true
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/4761281/pexels-photo-4761281.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'lifestyle',
      title: 'Pre borbe',
      isVideo: false
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/4761293/pexels-photo-4761293.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fights',
      title: 'Pobednički moment',
      isVideo: false
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/4761290/pexels-photo-4761290.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'training',
      title: 'Tehnički rad',
      isVideo: false
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/4754021/pexels-photo-4754021.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'lifestyle',
      title: 'Fokus i koncentracija',
      isVideo: true
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/4761298/pexels-photo-4761298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fights',
      title: 'Ring entrance',
      isVideo: false
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            MOJA <span className="text-yellow-400">GALERIJA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pogledaj najvažnije momente moje karijere - od treninga do spektakularnih borbi
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                </div>
              </div>

              {/* Video Play Button */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {categories.find(cat => cat.id === item.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors duration-200 z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-bold">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-gray-400 mt-2">
                  {selectedImage + 1} od {filteredItems.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;