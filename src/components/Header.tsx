import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 cursor-pointer"
          onClick={e => { e.preventDefault(); handleNav('#home'); }}
        >
          <span className="bg-orange-500 p-1.5 rounded-lg">
            <UtensilsCrossed size={20} className="text-white" />
          </span>
          <span className="text-xl font-bold text-orange-500">
            Vineyard <span className="text-orange-500">Catering</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-zinc-700 hover:text-orange-500 font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#booking')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition-colors cursor-pointer"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-zinc-700 hover:text-orange-500 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-4 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-zinc-700 hover:text-orange-500 font-medium py-1 text-left cursor-pointer transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#booking')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-semibold transition-colors cursor-pointer mt-2"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
