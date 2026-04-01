import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const contactItems = [
  {
    icon: <Phone size={22} className="text-orange-500" />,
    label: 'Phone',
    value: '+234 801 234 5678',
    href: 'tel:+2348012345678',
  },
  {
    icon: <MessageCircle size={22} className="text-orange-500" />,
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    href: 'https://wa.me/2348012345678',
  },
  {
    icon: <Mail size={22} className="text-orange-500" />,
    label: 'Email',
    value: 'hello@vineyardcatering.ng',
    href: 'mailto:hello@vineyardcatering.ng',
  },
  {
    icon: <MapPin size={22} className="text-orange-500" />,
    label: 'Address',
    value: 'Rd. 6, Omolayo Estate, Akobo, Ibadan, Oyo-State, Nigeria',
    href: 'https://maps.google.com',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Reach Us
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-zinc-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Have questions? We're always available to help you plan your perfect event.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-3xl border border-zinc-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 bg-amber-50"
            >
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-xs uppercase tracking-wider text-zinc-400 mb-1 font-semibold">{item.label}</p>
              <p className="text-zinc-700 font-medium text-sm leading-relaxed">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
