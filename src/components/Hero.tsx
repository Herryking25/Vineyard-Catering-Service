import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '../assets/hero.jpg';
import menuImage3 from '../assets/menuImage3.jpg';
import vineyardAbout from '../assets/Vineyard_about.jpg';

const backgroundImages = [
  { src: heroImage, alt: 'Catering setup 1' },
  { src: menuImage3, alt: 'Catering setup 2' },
  { src: vineyardAbout, alt: 'Catering setup 3' },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Carousel controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              index === currentImageIndex ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Delicious Moments,
          <br />
          <span className="text-orange-400">Beautifully Served</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-zinc-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          From intimate dinners to grand celebrations, Vineyard Catering delivers exceptional
          food and flawless service that turns every event into an unforgettable experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#booking')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 cursor-pointer shadow-lg shadow-orange-500/30"
          >
            Book Now
          </button>
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '500+', label: 'Events Catered' },
            { value: '10+', label: 'Years Experience' },
            { value: '98%', label: 'Happy Clients' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-orange-400">{stat.value}</p>
              <p className="text-zinc-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-orange-400 transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
