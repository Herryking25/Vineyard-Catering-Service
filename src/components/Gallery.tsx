import { motion } from 'framer-motion';
import menuImage1 from '../assets/menuImage1.jpg';
import menuImage2 from '../assets/menuImage2.jpg';
import menuImage3 from '../assets/menuImage3.jpg';
import menuImage4 from '../assets/menuImage4.jpg';
import menuImage5 from '../assets/menuImage5.jpg';
import menuImage6 from '../assets/menuImage6.jpg';
import menuImage7 from '../assets/menuImage7.jpg';

const images = [
  {
    src: menuImage1,
    alt: 'Menu showcase 1',
    span: 'col-span-1 row-span-2',
  },
  {
    src: menuImage2,
    alt: 'Menu showcase 2',
    span: 'col-span-1',
  },
  {
    src: menuImage3,
    alt: 'Menu showcase 3',
    span: 'col-span-1',
  },
  {
    src: menuImage4,
    alt: 'Menu showcase 4',
    span: 'col-span-1',
  },
  {
    src: menuImage5,
    alt: 'Menu showcase 5',
    span: 'col-span-1',
  },
   {
    src: menuImage6,
    alt: 'Menu showcase 5',
    span: 'col-span-1',
  },
   {
    src: menuImage7,
    alt: 'Menu showcase 5',
    span: 'col-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-zinc-900">
            A Taste of What We Do
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            From exquisite plating to stunning event setups — every detail is crafted with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${img.span} overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
