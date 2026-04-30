import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    need: 'Invoice Factoring',
    amount: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate CRM submission
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-white border-b border-secondary-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
              Get a free offer in <br/>
              <span className="font-serif italic font-normal text-primary-600">less than 24 hours.</span>
            </h1>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-2xl mx-auto font-light">
              Prefer to talk first? Message us directly. Our team responds within a few hours during business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS */}
      <section className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/+639000000000?text=Hi+Jia,+I'd+like+to+know+more" 
              className="p-10 bg-secondary-50 rounded-[3rem] border border-secondary-100 hover:timing-shadow transition-all group overflow-hidden relative"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#25D366] shadow-sm">
                  <AnimatedIcon icon={MessageCircle} size={32} trigger="hover" animation="pulse" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">WhatsApp</h3>
                <p className="text-secondary-500 font-medium">Chat with us instantly on your phone.</p>
                <div className="text-xs font-black uppercase tracking-widest text-[#25D366] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Message us <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Viber */}
            <a 
              href="viber://chat?number=+639000000000" 
              className="p-10 bg-secondary-50 rounded-[3rem] border border-secondary-100 hover:timing-shadow transition-all group overflow-hidden relative"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#7360F2] shadow-sm">
                  <AnimatedIcon icon={MessageSquare} size={32} trigger="hover" animation="pulse" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Viber</h3>
                <p className="text-secondary-500 font-medium">The preferred way to connect in the Philippines.</p>
                <div className="text-xs font-black uppercase tracking-widest text-[#7360F2] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Chat on Viber <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:support@jia.xyz" 
              className="p-10 bg-secondary-50 rounded-[3rem] border border-secondary-100 hover:timing-shadow transition-all group overflow-hidden relative"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary-900 shadow-sm">
                  <AnimatedIcon icon={Mail} size={32} trigger="hover" animation="float" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Email</h3>
                <p className="text-secondary-500 font-medium">support@jia.xyz <br/> Professional inquiries & support.</p>
                <div className="text-xs font-black uppercase tracking-widest text-secondary-900 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Send email <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. FORM SECTION */}
      <section className="py-24 bg-secondary-50 font-sans">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[4rem] border border-secondary-100 shadow-2xl overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full p-12 lg:p-20"
                >
                  <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tight text-secondary-900">Send us a message</h2>
                     <p className="text-secondary-500 mt-2">Required fields are marked with *</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Full Name*</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Business Name*</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Registered Business"
                          className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                          value={formData.businessName}
                          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Email*</label>
                        <input 
                          required
                          type="email" 
                          placeholder="name@business.com"
                          className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Phone*</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+63 9XX XXX XXXX"
                          className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">What do you need?</label>
                        <select 
                          className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.5rem_center] bg-no-repeat"
                          value={formData.need}
                          onChange={(e) => setFormData({...formData, need: e.target.value})}
                        >
                          <option>Invoice Factoring</option>
                          <option>Supply Chain Financing</option>
                          <option>Jia Account</option>
                          <option>Something else</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Approx amount (optional)</label>
                        <input 
                          type="text" 
                          placeholder="₱100,000 - ₱50,000,000"
                          className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Message (optional)</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your timing problem..."
                        className="w-full px-6 py-4 bg-secondary-50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <input 
                        required
                        id="consent"
                        type="checkbox" 
                        className="w-5 h-5 rounded border-secondary-300 text-primary-600 focus:ring-primary-600"
                        checked={formData.consent}
                        onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                      />
                      <label htmlFor="consent" className="text-sm text-secondary-500 font-medium select-none">
                        I agree to Jia's <Link to="/privacy" className="text-secondary-900 underline">Privacy Policy</Link>
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-6 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                      Submit inquiry <AnimatedIcon icon={Send} size={16} trigger="view" animation="float" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-20 text-center space-y-8"
                >
                   <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto text-primary-600">
                      <AnimatedIcon icon={CheckCircle2} size={48} animation="draw" />
                   </div>
                   <div className="space-y-4">
                     <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Got it!</h2>
                     <p className="text-xl text-secondary-500 font-light max-w-sm mx-auto leading-relaxed">
                       A Jia team member will reach out within 24 hours to discuss your next steps.
                     </p>
                   </div>
                   <div className="pt-8">
                     <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-widest text-primary-600 hover:text-primary-700 underline"
                     >
                       Send another inquiry
                     </button>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. FAQ DEFLECT */}
      <section className="py-24 bg-white font-sans text-center">
         <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
            <h3 className="text-2xl font-bold tracking-tight text-secondary-900 italic">Looking for quick answers?</h3>
            <div className="flex flex-col items-center">
              <Link 
                to="/faq" 
                className="inline-flex items-center gap-4 bg-secondary-50 px-10 py-5 rounded-full border border-secondary-100 text-[11px] font-black uppercase tracking-[0.2em] text-secondary-900 hover:bg-secondary-100 transition-all group shadow-sm hover:shadow-md"
              >
                Browse our FAQ <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
         </div>
      </section>

      {/* Trust Signal Footer Support */}
      <section className="py-12 bg-secondary-950 text-white font-sans border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 md:px-12 text-center opacity-40">
           <p className="text-[10px] font-black uppercase tracking-[0.5em]">Fast response. Reliable capital. Real relationship.</p>
         </div>
      </section>
    </div>
  );
}
