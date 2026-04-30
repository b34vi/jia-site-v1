import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const announcements = [
  "Get a free no-commitment offer in <24 hours → Contact Us",
  "Solving the timing problem for Philippine SMEs → Learn More",
  "Partnered with SEC & BSP for secure financing → See Details"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary-900 text-white py-2 px-6 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex-1 text-center overflow-hidden h-6 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Link to="/contact" className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] hover:text-primary-400 transition-colors flex items-center gap-2">
                {announcements[index]}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/10 rounded-full transition-colors ml-4"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
