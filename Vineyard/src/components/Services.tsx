import { motion } from 'framer-motion';
import { Heart, Briefcase, Gift, Tent, Users, Utensils } from 'lucide-react';

const services = [
  {
    icon: <Heart size={32} className="text-orange-500" />,
    title: 'Wedding Catering',
    desc: 'Make your special day truly unforgettable with elegantly crafted menus tailored to your love story and guests.',
    gradient: 'from-red-50 to-orange-50',
  },
  {
    icon: <Briefcase size={32} className="text-orange-500" />,
    title: 'Corporate Events',
    desc: 'Impress clients and energize your team with professionally presented meals perfect for meetings and conferences.',
    gradient: 'from-amber-50 to-yellow-50',
  },
  {
    icon: <Gift size={32} className="text-orange-500" />,
    title: 'Birthday Parties',
    desc: 'Celebrate milestones with vibrant food displays and personalized menus that delight guests of all ages.',
    gradient: 'from-orange-50 to-amber-50',
  },
  {
    icon: <Tent size={32} className="text-orange-500" />,
    title: 'Outdoor Catering',
    desc: 'Enjoy delicious food in any outdoor setting — from garden parties to beach events, we handle it all.',
    gradient: 'from-lime-50 to-amber-50',
  },
  {
    icon: <Users size={32} className="text-orange-500" />,
    title: 'Private Dining',
    desc: 'Exclusive chef-prepared meals delivered to your home, tailored to your taste and dietary preferences.',
    gradient: 'from-amber-50 to-orange-50',
  },
  {
    icon: <Utensils size={32} className="text-orange-500" />,
    title: 'Buffet & Live Stations',
    desc: 'Interactive live cooking stations and lavish buffet spreads that keep guests engaged and satisfied.',
    gradient: 'from-yellow-50 to-orange-50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-zinc-900">
            Our Catering Services
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            From intimate gatherings to grand celebrations, we offer comprehensive catering
            solutions tailored to every need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group p-8 rounded-3xl bg-gradient-to-br ${service.gradient} border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
