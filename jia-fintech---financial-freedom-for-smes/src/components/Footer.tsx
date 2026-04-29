import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-secondary-900 border-t border-secondary-100">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-secondary-100 pb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rotate-45"></div>
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase font-sans">Jia</span>
            </Link>
            <p className="text-secondary-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed max-w-[200px]">
              Solving the Timing Problem for SMEs.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-secondary-400 hover:text-secondary-900 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-secondary-400 hover:text-secondary-900 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-secondary-400 hover:text-secondary-900 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-secondary-400 hover:text-secondary-900 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-tighter">Medium</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary-900 mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/invoice-factoring" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Invoice Factoring</Link></li>
              <li><Link to="/supply-chain-financing" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Supply Chain Financing</Link></li>
              <li><Link to="/jia-account" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Jia Account</Link></li>
              <li><Link to="/how-it-works" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">How It Works</Link></li>
            </ul>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">About</Link></li>
                <li><Link to="/careers" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Careers</Link></li>
                <li><Link to="/contact" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary-900 mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><Link to="/case-studies" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Case Studies</Link></li>
                <li><Link to="/pricing" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">Pricing</Link></li>
                <li><Link to="/faq" className="text-secondary-500 hover:text-secondary-900 transition-colors text-[11px] font-bold uppercase tracking-widest">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary-900 mb-6">Newsletter</h4>
            <p className="text-secondary-500 text-[11px] font-medium italic mb-4 leading-relaxed">Monthly updates on liquidity & SME growth. No spam.</p>
            <div className="flex border border-secondary-100 rounded-full p-1 bg-secondary-50">
               <input type="email" className="px-4 py-2 bg-transparent text-[11px] font-medium w-full outline-none uppercase" placeholder="EMAIL" />
               <button className="bg-secondary-900 text-white rounded-full px-6 py-2 text-[10px] font-black tracking-widest uppercase">Subscribe</button>
            </div>
            <div className="mt-8 flex items-center gap-6 opacity-40 grayscale">
               <span className="text-[10px] font-black border border-secondary-900 px-2 py-0.5">SEC</span>
               <span className="text-[10px] font-black border border-secondary-900 px-2 py-0.5">BSP</span>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-widest text-secondary-400">
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-secondary-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary-900 transition-colors">Terms</Link>
          </div>
          <div className="italic font-medium">
             © 2026 Jia Financing Inc., Philippines
          </div>
        </div>
      </div>
    </footer>
  );
}
