import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Local Dishes', 'Continental', 'Small Chops', 'Drinks'];

const menuItems: Record<string, { name: string; desc: string; price: string }[]> = {
  'Local Dishes': [
    { name: 'Jollof Rice & Chicken', desc: 'Party-style Jollof rice served with grilled chicken and coleslaw', price: '₦3,500' },
    { name: 'Egusi Soup & Pounded Yam', desc: 'Rich egusi soup with assorted meat, served with smooth pounded yam', price: '₦4,200' },
    { name: 'Fried Rice & Beef', desc: 'Colourful Nigerian fried rice with seasoned beef and salad', price: '₦3,200' },
    { name: 'Pepper Soup (Catfish)', desc: 'Spicy and aromatic catfish pepper soup with fresh herbs', price: '₦4,500' },
    { name: 'Ofada Rice & Stew', desc: 'Premium ofada rice served with designer ofada sauce', price: '₦3,800' },
    { name: 'Banga Soup & Starch', desc: 'Delta-style palm nut banga soup with assorted meat and starch', price: '₦4,000' },
  ],
  'Continental': [
    { name: 'Grilled Salmon Fillet', desc: 'Pan-seared salmon with herb butter, seasonal vegetables, and mashed potatoes', price: '₦8,500' },
    { name: 'Chicken Pasta Alfredo', desc: 'Creamy Alfredo pasta with tender grilled chicken strips and parmesan', price: '₦5,500' },
    { name: 'BBQ Beef Ribs', desc: 'Slow-cooked BBQ beef ribs with smoky sauce, fries, and coleslaw', price: '₦9,000' },
    { name: 'Vegetable Stir Fry', desc: 'Seasonal vegetables stir-fried in light soy-ginger sauce with jasmine rice', price: '₦3,500' },
    { name: 'Beef Burger & Fries', desc: 'Juicy smash burger with cheese, lettuce, pickles, and seasoned fries', price: '₦4,800' },
    { name: 'Caesar Salad', desc: 'Classic Caesar salad with crunchy croutons, parmesan shavings, and house dressing', price: '₦2,800' },
  ],
  'Small Chops': [
    { name: 'Samosa (6 pcs)', desc: 'Crispy golden samosas filled with spiced minced beef or vegetables', price: '₦1,800' },
    { name: 'Spring Rolls (6 pcs)', desc: 'Crunchy spring rolls packed with veggies and served with sweet chili dip', price: '₦1,600' },
    { name: 'Puff Puff (10 pcs)', desc: 'Soft, fluffy deep-fried Nigerian dough balls lightly dusted with sugar', price: '₦1,200' },
    { name: 'Sausage Rolls (4 pcs)', desc: 'Flaky pastry rolls stuffed with seasoned spiced sausage meat', price: '₦1,500' },
    { name: 'Mini Chicken Skewers (6 pcs)', desc: 'Tender marinated chicken skewers grilled to perfection with suya spice', price: '₦2,200' },
    { name: 'Mixed Small Chops Platter', desc: 'Assorted platter of samosa, spring rolls, puff puff, and sausage rolls', price: '₦5,500' },
  ],
  'Drinks': [
    { name: 'Fresh Fruit Punch', desc: 'Refreshing mix of tropical fruits blended with ginger and mint', price: '₦1,200' },
    { name: 'Chapman', desc: 'Nigerian classic Chapman cocktail with grenadine, Fanta, Sprite, and cucumber', price: '₦1,500' },
    { name: 'Zobo Drink', desc: 'Chilled hibiscus zobo punch infused with ginger, cloves, and pineapple flavour', price: '₦800' },
    { name: 'Chilled Bottled Water', desc: 'Premium branded bottled water, served chilled', price: '₦200' },
    { name: 'Assorted Soft Drinks', desc: 'Choice of Coke, Fanta, Sprite, 7-Up, or Maltina — chilled and ready to serve', price: '₦500' },
    { name: 'Bottle Water (Crate)', desc: 'Full crate of 12 chilled premium branded bottled water', price: '₦2,000' },
  ],
};

export default function Menu() {
  const [active, setActive] = useState('Local Dishes');

  return (
    <section id="menu" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Our Offerings
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-zinc-900">
            Explore the Menu
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            A rich selection of authentic Nigerian dishes, continental favourites, snacks, and refreshing drinks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                active === cat
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-orange-300 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {menuItems[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-orange-50 transition-shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-zinc-900 text-base leading-snug">{item.name}</h3>
                  <span className="text-orange-500 font-bold text-sm whitespace-nowrap shrink-0 mt-0.5">{item.price}</span>
                </div>
                <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-zinc-400 text-sm mt-8">
          * Prices may vary based on quantity and custom requests. Contact us for a personalised quote.
        </p>
      </div>
    </section>
  );
}
