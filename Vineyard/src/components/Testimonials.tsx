import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Bride',
    review:
      'Vineyard Catering made our wedding reception absolutely magical. The food was phenomenal and the service was flawless. Every guest kept asking who the caterer was!',
    rating: 5,
    avatar: 'AO',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Corporate Event Manager',
    review:
      'We hired them for our annual company dinner and they exceeded every expectation. Professional, punctual, and the food was genuinely outstanding.',
    rating: 5,
    avatar: 'EN',
  },
  {
    name: 'Fatima Abdullahi',
    role: 'Birthday Celebrant',
    review:
      'My 40th birthday party was everything I dreamed of thanks to Vineyard. The small chops were a huge hit and the jollof rice was cooked to perfection!',
    rating: 5,
    avatar: 'FA',
  },
  {
    name: 'Chukwudi Eze',
    role: 'Private Client',
    review:
      'I have used Vineyard for three different events now. Consistent quality, amazing flavours, and a team that genuinely cares about your satisfaction. Highly recommended.',
    rating: 5,
    avatar: 'CE',
  },
  {
    name: 'Ngozi Iheanyi',
    role: 'Mother of the Bride',
    review:
      'From the tasting session to the final service, Vineyard was professional and attentive. The buffet spread was gorgeous and tasted even better than it looked.',
    rating: 5,
    avatar: 'NI',
  },
  {
    name: 'Tunde Badmus',
    role: 'Event Planner',
    review:
      'As an event planner, I need reliable vendors. Vineyard Catering is always my first call. They are dependable, creative, and their food is consistently delicious.',
    rating: 5,
    avatar: 'TB',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section id="testimonials" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
            Happy Clients
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            What People Are Saying
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Real words from real customers who trusted us with their most important moments.
          </p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col gap-4 hover:bg-white/10 transition-colors"
              >
                <Quote size={24} className="text-orange-400 opacity-70" />
                <p className="text-zinc-300 leading-relaxed text-sm flex-1">"{t.review}"</p>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-zinc-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  i === currentIndex ? 'bg-orange-500' : 'bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
