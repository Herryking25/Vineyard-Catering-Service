import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero.jpg';


export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Catering background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
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
