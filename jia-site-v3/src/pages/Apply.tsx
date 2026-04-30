import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  FileText, 
  Building2, 
  User2, 
  MessageSquare, 
  Laptop, 
  ArrowRight,
  Monitor,
  ShieldCheck,
  Package,
  Clock,
  HelpCircle,
  MessageCircle
} from 'lucide-react';

type Step = 1 | 2 | 3 | 'success';

interface FormData {
  mainNeed: string;
  situation: string;
  businessName: string;
  registrationType: string;
  industry: string;
  yearsInOperation: string;
  monthlyRevenue: string;
  amountNeeded: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
  bestTime: string;
}

export default function Apply() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    mainNeed: '',
    situation: '',
    businessName: '',
    registrationType: '',
    industry: '',
    yearsInOperation: '',
    monthlyRevenue: '',
    amountNeeded: '',
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'WhatsApp',
    bestTime: 'Morning (9am - 12pm)'
  });

  const [isNavigating, setIsNavigating] = useState(false);

  const nextStep = () => {
    setIsNavigating(true);
    setTimeout(() => {
      if (step === 1) setStep(2);
      else if (step === 2) setStep(3);
      setIsNavigating(false);
      window.scrollTo(0, 0);
    }, 600);
  };

  const prevStep = () => {
    setIsNavigating(true);
    setTimeout(() => {
      if (step === 2) setStep(1);
      else if (step === 3) setStep(2);
      setIsNavigating(false);
      window.scrollTo(0, 0);
    }, 600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => {
      setStep('success');
      setIsNavigating(false);
      window.scrollTo(0, 0);
    }, 1200);
  };

  function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
  }

  return (
    <div className="min-h-screen bg-secondary-50 pb-20 font-sans selection:bg-primary-100">
      {/* LOADING OVERLAY */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] glass flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-secondary-100 border-t-primary-600 rounded-full"
              />
              <div className="flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 animate-pulse">Securing your spot</span>
                <span className="text-[10px] font-bold text-secondary-400 mt-2">Connecting to Jia's network...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PERSISTENT TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-secondary-900 tracking-tighter hover:scale-105 transition-transform flex items-center gap-2">
            <span className="w-8 h-8 bg-secondary-900 text-white rounded-lg flex items-center justify-center text-xs">J</span>
            JIA
          </Link>
          
          <div className="hidden md:flex flex-col items-center flex-1 max-w-xl px-12">
            {step !== 'success' && (
              <div className="w-full relative py-2">
                <div className="w-full h-1 bg-secondary-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-linear-to-r from-primary-400 to-primary-600"
                    animate={{ width: `${(Number(step) / 3) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </div>
                <div className="flex justify-between mt-3 w-full">
                  {[
                    { s: 1, label: 'Needs' },
                    { s: 2, label: 'Business' },
                    { s: 3, label: 'Contact' }
                  ].map((item) => (
                    <div key={item.s} className="flex flex-col items-center">
                      <motion.div 
                        animate={{ 
                          scale: Number(step) >= item.s ? 1 : 0.8,
                          backgroundColor: Number(step) >= item.s ? 'var(--color-primary-600)' : 'var(--color-secondary-200)'
                        }}
                        className="w-2 h-2 rounded-full z-10"
                      />
                      <span className={cn(
                        "text-[8px] font-black uppercase tracking-[0.2em] mt-2 transition-colors",
                        Number(step) >= item.s ? "text-primary-600" : "text-secondary-300"
                      )}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/50 border border-white/40 rounded-full shadow-sm backdrop-blur-sm">
                <AnimatedIcon icon={Clock} size={12} className="text-secondary-400" animation="float" />
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary-500">Timeline: 24h</span>
             </div>
             <motion.div 
               animate={{ opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-[10px] font-black uppercase tracking-widest text-primary-600"
             >
               Saved
             </motion.div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-32">
        <AnimatePresence mode="wait">
          {/* STEP 1: WHAT DO YOU NEED? */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="fluid-h2 font-bold tracking-tight text-secondary-900">What are you looking for?</h1>
                <p className="text-xl text-secondary-500 font-light">Select the primary use for your capital.</p>
              </div>

              <div className="grid gap-6">
                {[
                  { id: 'capital', label: 'Working capital', sub: 'Invoice factoring or supply chain', icon: Package },
                  { id: 'account', label: 'A Jia business account', sub: 'Payments & cash flow tools', icon: Building2 },
                  { id: 'both', label: 'Both', sub: 'Everything Jia has to offer', icon: ShieldCheck },
                  { id: 'unsure', label: 'Not sure yet', sub: 'Talk to a specialist', icon: HelpCircle },
                ].map((opt) => (
                  <motion.button
                    key={opt.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({ ...formData, mainNeed: opt.id })}
                    className={cn(
                      "flex items-center justify-between p-8 rounded-[2.5rem] border-2 transition-all text-left group min-h-[100px]",
                      formData.mainNeed === opt.id 
                        ? "border-primary-600 bg-white shadow-2xl shadow-primary-100 ring-4 ring-primary-50" 
                        : "border-white bg-white hover:border-secondary-200"
                    )}
                  >
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500",
                        formData.mainNeed === opt.id ? "bg-primary-600 text-white rotate-6 scale-110" : "bg-secondary-50 text-secondary-400 group-hover:bg-secondary-100"
                      )}>
                        <AnimatedIcon icon={opt.icon} size={32} trigger="view" animation="float" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-secondary-900 leading-tight">{opt.label}</div>
                        <div className="text-xs font-black uppercase tracking-widest text-secondary-400 mt-2">{opt.sub}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Conditional Sub-question */}
              <AnimatePresence>
                {formData.mainNeed === 'capital' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 pt-8 border-t border-secondary-200"
                  >
                    <h2 className="text-2xl font-bold text-secondary-900">What's the situation?</h2>
                    <div className="grid gap-4">
                      {[
                        { id: 'waiting', label: "I have invoices I'm waiting to get paid on" },
                        { id: 'suppliers', label: "I need to pay suppliers or stock inventory" },
                        { id: 'both-sit', label: "Both" },
                      ].map((sit) => (
                        <button
                          key={sit.id}
                          onClick={() => setFormData({ ...formData, situation: sit.id })}
                          className={cn(
                            "p-6 rounded-2xl border-2 text-left transition-all font-bold",
                            formData.situation === sit.id 
                              ? "border-primary-600 bg-primary-50" 
                              : "border-white bg-white hover:border-secondary-100"
                          )}
                        >
                          {sit.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-8">
                <button 
                  onClick={nextStep}
                  disabled={!formData.mainNeed}
                  className="w-full py-6 bg-secondary-900 text-white font-black uppercase tracking-widest rounded-full shadow-2xl hover:bg-secondary-800 disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-3"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: YOUR BUSINESS */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="fluid-h2 font-bold tracking-tight text-secondary-900">Tell us about your business</h1>
                <p className="text-xl text-secondary-500 font-light">Basic details to help us understand your scale.</p>
              </div>

              <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-secondary-200/50 border border-secondary-100 space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Business Name*</label>
                  <input 
                    type="text" 
                    placeholder="Registered Name"
                    className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg min-h-[64px]"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Registration Type*</label>
                    <select 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none min-h-[64px]"
                      value={formData.registrationType}
                      onChange={(e) => setFormData({...formData, registrationType: e.target.value})}
                    >
                      <option value="">Select type...</option>
                      <option>DTI (Sole Proprietorship)</option>
                      <option>SEC Partnership</option>
                      <option>Corporation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Industry*</label>
                    <select 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none min-h-[64px]"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    >
                      <option value="">Select industry...</option>
                      <option>Retail / Distribution</option>
                      <option>Construction / Logistics</option>
                      <option>E-commerce / Tech</option>
                      <option>Manufacturing</option>
                      <option>Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Years in Operation*</label>
                    <select 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none min-h-[64px]"
                      value={formData.yearsInOperation}
                      onChange={(e) => setFormData({...formData, yearsInOperation: e.target.value})}
                    >
                      <option value="">Select range...</option>
                      <option>&lt; 1 year</option>
                      <option>1 – 3 years</option>
                      <option>3 – 5 years</option>
                      <option>5+ years</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Monthly Revenue*</label>
                    <select 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none min-h-[64px]"
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({...formData, monthlyRevenue: e.target.value})}
                    >
                      <option value="">Select range...</option>
                      <option>₱0 - ₱500k</option>
                      <option>₱500k - ₱1.5M</option>
                      <option>₱1.5M - ₱5M</option>
                      <option>₱5M - ₱20M</option>
                      <option>₱20M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Amount You Need*</label>
                  <div className="relative">
                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-lg font-black text-secondary-400">₱</span>
                    <input 
                      type="text" 
                      placeholder="500,000"
                      className="w-full pl-14 pr-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg min-h-[64px]"
                      value={formData.amountNeeded}
                      onChange={(e) => setFormData({...formData, amountNeeded: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <button onClick={prevStep} className="px-10 py-6 bg-white border border-secondary-200 text-secondary-900 font-bold rounded-full hover:bg-secondary-50 transition-all font-sans min-h-[64px] min-w-[120px]">
                    Back
                 </button>
                 <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  disabled={!formData.businessName || !formData.amountNeeded}
                  className="flex-1 py-6 bg-secondary-900 text-white font-black uppercase tracking-widest rounded-full shadow-2xl hover:bg-secondary-800 disabled:opacity-50 transition-all flex items-center justify-center gap-3 min-h-[64px]"
                 >
                    Next Step <ArrowRight className="w-4 h-4" />
                 </motion.button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CONTACT & DOCS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="fluid-h2 font-bold tracking-tight text-secondary-900">Almost done</h1>
                <p className="text-xl text-secondary-500 font-light">We'll reach out with a personalized offer.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-secondary-200/50 border border-secondary-100 space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Full Name*</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg min-h-[64px]"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Email*</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg min-h-[64px]"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Mobile Number (+63)*</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="9XX XXX XXXX"
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg min-h-[64px]"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Preferred Contact*</label>
                      <select 
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none min-h-[64px]"
                        value={formData.preferredContact}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                      >
                        <option>WhatsApp</option>
                        <option>Viber</option>
                        <option>Email</option>
                        <option>Phone Call</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Best Time to Reach You</label>
                      <select 
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none min-h-[64px]"
                        value={formData.bestTime}
                        onChange={(e) => setFormData({...formData, bestTime: e.target.value})}
                      >
                        <option>Morning (9am - 12pm)</option>
                        <option>Afternoon (1pm - 5pm)</option>
                        <option>Evening (5pm - 8pm)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                   <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">Attach documents if you have them</h3>
                      <p className="text-lg text-secondary-500 font-light italic">No documents yet? No problem — we'll follow up.</p>
                   </div>
                   
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                       {[
                         { label: 'Valid ID', icon: User2 },
                         { label: 'Business Reg', icon: Building2 },
                         { label: 'Bank Stmts', icon: MessageSquare },
                         { label: 'Invoices / POs', icon: FileText },
                       ].map((docType) => (
                         <motion.div 
                           key={docType.label} 
                           whileHover={{ y: -5, borderColor: 'var(--color-primary-400)' }}
                           className="p-8 bg-white rounded-[2rem] border-2 border-dashed border-secondary-200 text-center transition-all cursor-pointer group hover:shadow-xl group-hover:bg-secondary-50"
                         >
                            <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                              <AnimatedIcon icon={Upload} size={20} className="text-secondary-400 group-hover:text-white" trigger="hover" animation="bounce" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary-600">{docType.label}</div>
                         </motion.div>
                       ))}
                    </div>
                </div>

                <div className="space-y-6">
                  <p className="text-xs text-center text-secondary-400 font-medium">By submitting, I agree to Jia's Privacy Policy.</p>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="px-10 py-6 bg-white border border-secondary-200 text-secondary-900 font-bold rounded-full hover:bg-secondary-50 transition-all font-sans min-h-[64px] min-w-[120px]">
                      Back
                    </button>
                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-6 bg-primary-600 text-white font-black uppercase tracking-widest rounded-full shadow-2xl hover:bg-primary-700 transition-all flex items-center justify-center gap-3 min-h-[64px]"
                    >
                      Submit Application <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}

          {/* SUCCESS STATE */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="text-center space-y-12"
            >
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white shadow-2xl relative z-10">
                   <CheckCircle2 className="w-12 h-12" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary-400 rounded-full z-0"
                />
              </div>

              <div className="space-y-4">
                <h1 className="fluid-h2 font-bold tracking-tight text-secondary-900">You're in. <br/> We'll reach out within 24 hours.</h1>
                <p className="text-xl text-secondary-500 font-light">
                  A Jia team member will contact you via <span className="font-bold text-secondary-900">{formData.preferredContact}</span> <br className="hidden md:block"/> at <span className="font-bold text-secondary-900">{formData.phone || formData.email}</span>.
                </p>
              </div>

              <div className="glass rounded-[3rem] p-10 border border-white/40 shadow-2xl text-left space-y-8">
                <h3 className="text-xl font-bold text-secondary-900">Next Steps</h3>
                <div className="grid gap-6">
                  {[
                    { step: 1, text: "Watch for our message (we'll reach out within 24 hours)" },
                    { step: 2, text: "Have your documents ready (SEC/DTI, Bank Statements)" },
                    { step: 3, text: "Ask us anything" },
                  ].map((s) => (
                    <motion.div 
                      key={s.step}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + s.step * 0.1 }}
                      className="flex gap-6 items-center p-6 bg-white/50 rounded-2xl border border-white/20"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-black shrink-0">0{s.step}</div>
                      <p className="text-secondary-700 font-bold leading-tight">{s.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 pt-8">
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">While you wait</div>
                <Link 
                  to="/case-studies" 
                  className="liquid-cta group inline-flex items-center gap-4 bg-secondary-900 text-white px-10 py-6 rounded-full hover:bg-secondary-800 transition-all font-bold shadow-xl"
                >
                  Read how SariSuki grew with Jia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="pt-4">
                  <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-secondary-400 hover:text-secondary-900 transition-colors">Return to Home</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
