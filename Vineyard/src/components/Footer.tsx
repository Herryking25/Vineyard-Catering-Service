import { UtensilsCrossed } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-500 p-1.5 rounded-lg">
                <UtensilsCrossed size={18} className="text-white" />
              </span>
              <span className="text-xl font-bold">
                Vineyard <span className="text-orange-400">Catering</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Delicious moments, beautifully served. We bring culinary excellence to every occasion.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-zinc-300 hover:text-orange-400 text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">Connect With Us</h3>
            <p className="text-zinc-300 text-sm mb-1">📞 +234 801 234 5678</p>
            <p className="text-zinc-300 text-sm mb-1">✉️ hello@vineyardcatering.ng</p>
            <p className="text-zinc-400 text-sm mb-6">Rd. 6, Omolayo Estate, Akobo, Ibadan, Oyo-State.</p>
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="bg-white/10 hover:bg-orange-500 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Vineyard Catering. All rights reserved.</p>
          <p>Crafted with ❤️ for unforgettable events</p>
        </div>
      </div>
    </footer>
  );
}
