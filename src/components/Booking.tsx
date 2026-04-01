import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const eventTypes = [
  'Wedding', 'Corporate Event', 'Birthday Party', 'Outdoor Event',
  'Private Dining', 'Buffet / Live Station', 'Other',
];

export default function Booking() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventType: '', date: '', guests: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-zinc-900">
            Request a Quote
          </h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours with a personalised quote.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Send size={28} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Request Sent!</h3>
              <p className="text-zinc-500">
                Thank you, {form.name}! We've received your request and will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 08012345678"
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Event Type *</label>
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Event Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Number of Guests *</label>
                <input
                  type="number"
                  name="guests"
                  required
                  min="1"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="e.g. 150"
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700">Additional Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your event, dietary requirements, or special requests..."
                  className="border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={18} />
                  Get a Quote
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
