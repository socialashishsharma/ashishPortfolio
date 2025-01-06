import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          <div className="flex space-x-4">
            {['about', 'experience', 'education', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-emerald-400 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}