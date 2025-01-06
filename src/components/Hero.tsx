import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const traits = [
  "A Creative Problem Solver",
  "An Analytical Thinker",
  "A Strategic Leader",
  "A Data-Driven Innovator",
  "A Tech Enthusiast"
];

export default function Hero() {
  const [currentTraitIndex, setCurrentTraitIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTrait = traits[currentTraitIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTrait.substring(0, displayText.length + 1));
        if (displayText.length === currentTrait.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setDisplayText(currentTrait.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTraitIndex((prev) => (prev + 1) % traits.length);
        }
      }
    }, isDeleting ? 25 : 50);

    return () => clearTimeout(timeout);
  }, [displayText, currentTraitIndex, isDeleting]);

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Ashish Kumar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:socialashishsharma@gmail.com"
              className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
              <span>socialashishsharma@gmail.com</span>
            </a>
            <a 
              href="tel:9835519917"
              className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>9835519917</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>Hyderabad</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-emerald-400/20">
            <img
              src="/profile.jpg"
              alt="Ashish Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}