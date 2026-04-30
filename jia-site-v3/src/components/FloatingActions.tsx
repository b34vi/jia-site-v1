import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <>
      {/* Bottom Left: Social shortcuts (Desktop only) */}
      <div className="hidden md:flex fixed bottom-8 left-8 z-[50] flex-col gap-3">
        <a 
          href="https://wa.me/+639000000000?text=Hi+Jia" 
          target="_blank" 
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="WhatsApp Support"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a 
          href="viber://chat?number=+639000000000" 
          className="w-12 h-12 bg-[#7360F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Viber Support"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Bottom Right: Get Started CTA (Desktop only) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-[50]">
        <Link to="/apply">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary-900 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-2xl flex items-center gap-3 border border-white/10"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </>
  );
}
