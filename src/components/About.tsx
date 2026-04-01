import { motion } from 'framer-motion';
import { Award, Heart, ChefHat } from 'lucide-react';
import aboutImage from '../assets/Vineyard_about.jpg';

const highlights = [
  {
    icon: <ChefHat size={28} className="text-orange-500" />,
    title: '35+ Years Experience',
    desc: 'A decade of crafting unforgettable culinary experiences for every occasion.',
  },
  {
    icon: <Award size={28} className="text-orange-500" />,
    title: 'Award-Winning Quality',
    desc: 'Recognized for excellence in taste, presentation, and professional service.',
  },
  {
    icon: <Heart size={28} className="text-orange-500" />,
    title: 'Passion for Food',
    desc: 'Every dish is made with love, using fresh, locally-sourced ingredients.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={aboutImage}
                alt="Our culinary team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-extrabold">500+</p>
              <p className="text-sm font-medium opacity-90">Events Catered</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Who We Are
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
              A Culinary Experience <br />
              <span className="text-orange-500">Like No Other</span>
            </h2>
            <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
              At Vineyard Catering, we believe that great food is the heart of every celebration.
              Founded with a passion for authentic flavors and impeccable service, we've grown into
              a trusted partner for weddings, corporate events, birthdays, and beyond.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Our team of expert chefs brings creativity and precision to every plate, while our
              dedicated coordinators ensure your event runs flawlessly from start to finish.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-orange-100 rounded-xl p-2.5 shrink-0">{h.icon}</div>
                  <div>
                    <h3 className="font-bold text-zinc-900">{h.title}</h3>
                    <p className="text-zinc-500 text-sm mt-0.5">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
