import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const products = [
  { name: 'Get paid sooner', description: 'Invoice Factoring', href: '/invoice-factoring' },
  { name: 'Fund your supply chain', description: 'Supply Chain Financing', href: '/supply-chain-financing' },
  { name: 'Open a Jia Account', description: 'Business Account', href: '/jia-account' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "relative w-full transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-secondary-100 py-4" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary-900 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-secondary-50 rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase font-sans">Jia</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="relative group">
            <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-secondary-500 hover:text-secondary-900 transition-colors py-2">
              Products <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-secondary-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              {products.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex flex-col p-4 rounded-xl hover:bg-secondary-50 transition-colors"
                >
                  <span className="text-sm font-bold text-secondary-900">{item.name}</span>
                  <span className="text-xs text-secondary-400 font-medium">{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link to="/how-it-works" className="text-[11px] font-bold uppercase tracking-widest text-secondary-500 hover:text-secondary-900 transition-colors">How It Works</Link>
          <Link to="/case-studies" className="text-[11px] font-bold uppercase tracking-widest text-secondary-500 hover:text-secondary-900 transition-colors">Case Studies</Link>
          <Link to="/about" className="text-[11px] font-bold uppercase tracking-widest text-secondary-500 hover:text-secondary-900 transition-colors">About</Link>
          <div className="flex items-center gap-8 ml-4">
            <button className="text-[11px] font-bold uppercase tracking-widest text-secondary-500 hover:text-secondary-900 transition-colors">Login</button>
            <Link 
              to="/apply" 
              className="px-8 py-3 bg-secondary-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary-800 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-secondary-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-secondary-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest">Products</span>
                {products.map((item) => (
                  <Link key={item.href} to={item.href} className="text-lg font-semibold text-secondary-900">
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link to="/how-it-works" className="text-lg font-semibold text-secondary-900">How It Works</Link>
              <Link to="/case-studies" className="text-lg font-semibold text-secondary-900">Case Studies</Link>
              <Link to="/about" className="text-lg font-semibold text-secondary-900">About</Link>
              <div className="pt-6 flex flex-col gap-3">
                <Link to="/apply" className="w-full py-4 bg-secondary-900 text-white text-center font-bold uppercase tracking-widest text-xs rounded-full shadow-lg">
                  Get Started
                </Link>
                <button className="w-full py-4 border border-secondary-200 text-secondary-500 font-bold uppercase tracking-widest text-xs rounded-full">
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
