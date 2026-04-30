import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-secondary-100 z-[60] px-6 py-4 flex items-center justify-between gap-4 shadow-[0_-10px_20px_rgb(0,0,0,0.05)]">
      <div className="flex items-center gap-3">
        <a 
          href="https://wa.me/+639000000000?text=Hi+Jia" 
          className="p-3 bg-secondary-50 text-[#25D366] rounded-xl hover:bg-secondary-100 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a 
          href="viber://chat?number=+639000000000" 
          className="p-3 bg-secondary-50 text-[#7360F2] rounded-xl hover:bg-secondary-100 transition-colors"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
      <Link 
        to="/apply" 
        className="flex-1 bg-secondary-900 text-white py-4 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2"
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
