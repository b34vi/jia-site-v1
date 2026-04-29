import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
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

  const nextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
  }

  return (
    <div className="min-h-screen bg-secondary-50 pb-20 font-sans">
      {/* PERSISTENT TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-secondary-900 tracking-tighter">JIA</Link>
          
          <div className="hidden md:flex flex-col items-end">
            <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">
              {step !== 'success' ? `Step ${step} of 3` : 'Application Complete'}
            </div>
            {step !== 'success' && (
              <div className="w-48 h-1.5 bg-secondary-100 rounded-full mt-2 overflow-hidden">
                <motion.div 
                  className="h-full bg-primary-600"
                  animate={{ width: `${(Number(step) / 3) * 100}%` }}
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-secondary-50 border border-secondary-100 rounded-full">
                <Clock className="w-3 h-3 text-secondary-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary-500">Takes ~4 mins</span>
             </div>
             <div className="text-[10px] font-black uppercase tracking-widest text-primary-600">Saved</div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-32">
        <AnimatePresence mode="wait">
          {/* STEP 1: WHAT DO YOU NEED? */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">What are you looking for?</h1>
                <p className="text-xl text-secondary-500 font-light">Select the primary use for your capital.</p>
              </div>

              <div className="grid gap-4">
                {[
                  { id: 'capital', label: 'Working capital', sub: 'Invoice factoring or supply chain', icon: Package },
                  { id: 'account', label: 'A Jia business account', sub: 'Payments & cash flow tools', icon: Building2 },
                  { id: 'both', label: 'Both', sub: 'Everything Jia has to offer', icon: ShieldCheck },
                  { id: 'unsure', label: 'Not sure yet', sub: 'Talk to a specialist', icon: HelpCircle },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, mainNeed: opt.id })}
                    className={cn(
                      "flex items-center justify-between p-8 rounded-3xl border-2 transition-all text-left group",
                      formData.mainNeed === opt.id 
                        ? "border-primary-600 bg-primary-50 shadow-lg ring-4 ring-primary-50" 
                        : "border-white bg-white hover:border-secondary-200"
                    )}
                  >
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all",
                        formData.mainNeed === opt.id ? "bg-primary-600 text-white" : "bg-secondary-50 text-secondary-400"
                      )}>
                        <opt.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-secondary-900 leading-tight">{opt.label}</div>
                        <div className="text-xs font-black uppercase tracking-widest text-secondary-400 mt-1">{opt.sub}</div>
                      </div>
                    </div>
                  </button>
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Tell us about your business</h1>
                <p className="text-xl text-secondary-500 font-light">Basic details to help us understand your scale.</p>
              </div>

              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-secondary-100 space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Business Name*</label>
                  <input 
                    type="text" 
                    placeholder="Registered Name"
                    className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Registration Type*</label>
                    <select 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none"
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
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none"
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
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none"
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
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none"
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
                      className="w-full pl-14 pr-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg"
                      value={formData.amountNeeded}
                      onChange={(e) => setFormData({...formData, amountNeeded: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <button onClick={prevStep} className="px-10 py-6 bg-white border border-secondary-200 text-secondary-900 font-bold rounded-full hover:bg-secondary-50 transition-all">
                    Back
                 </button>
                 <button 
                  onClick={nextStep}
                  disabled={!formData.businessName || !formData.amountNeeded}
                  className="flex-1 py-6 bg-secondary-900 text-white font-black uppercase tracking-widest rounded-full shadow-2xl hover:bg-secondary-800 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                 >
                    Next Step <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CONTACT & DOCS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Almost done</h1>
                <p className="text-xl text-secondary-500 font-light">We'll reach out with a personalized offer.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-secondary-100 space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Full Name*</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg"
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
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg"
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
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary-400 ml-4">Preferred Contact*</label>
                      <select 
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none"
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
                        className="w-full px-8 py-5 bg-secondary-50 rounded-2xl border-2 border-transparent focus:border-primary-600 focus:bg-white transition-all font-bold text-lg appearance-none"
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

                <div className="space-y-6">
                   <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-secondary-900">Attach documents if you have them</h3>
                      <p className="text-lg text-secondary-500 font-light italic">No documents yet? No problem — we'll follow up.</p>
                   </div>
                   
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: 'Valid ID', icon: User2 },
                        { label: 'Business Reg', icon: Building2 },
                        { label: 'Bank Stmts', icon: MessageSquare },
                        { label: 'Invoices / POs', icon: FileText },
                      ].map((docType) => (
                        <div key={docType.label} className="p-6 bg-white rounded-3xl border-2 border-dashed border-secondary-200 text-center hover:border-primary-600 transition-all cursor-pointer group">
                           <div className="w-10 h-10 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-50 group-hover:text-primary-600">
                             <Upload className="w-4 h-4 text-secondary-400 group-hover:text-primary-600" />
                           </div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-secondary-600">{docType.label}</div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-6">
                  <p className="text-xs text-center text-secondary-400 font-medium">By submitting, I agree to Jia's Privacy Policy.</p>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="px-10 py-6 bg-white border border-secondary-200 text-secondary-900 font-bold rounded-full hover:bg-secondary-50 transition-all">
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-6 bg-primary-600 text-white font-black uppercase tracking-widest rounded-full shadow-2xl hover:bg-primary-700 transition-all flex items-center justify-center gap-3"
                    >
                      Submit Application <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}

          {/* SUCCESS STATE */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-12"
            >
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white shadow-2xl">
                 <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">You're in. <br/> We'll reach out within 24 hours.</h1>
                <p className="text-xl text-secondary-500 font-light">
                  A Jia team member will contact you via <span className="font-bold text-secondary-900">{formData.preferredContact}</span> <br className="hidden md:block"/> at <span className="font-bold text-secondary-900">{formData.phone || formData.email}</span>.
                </p>
              </div>

              <div className="bg-white rounded-[3rem] p-10 border border-secondary-100 shadow-xl text-left space-y-8">
                <h3 className="text-xl font-bold text-secondary-900">Next Steps</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-black shrink-0">1</div>
                    <p className="text-secondary-600 font-medium">Watch for our message (we'll reach out within 24 hours)</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-black shrink-0">2</div>
                    <p className="text-secondary-600 font-medium">Have your documents ready (SEC/DTI, Bank Statements)</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-black shrink-0">3</div>
                    <p className="text-secondary-600 font-medium">
                      Ask us anything → 
                      <Link to="/contact" className="inline-flex items-center gap-1 text-primary-600 font-bold ml-2">WhatsApp</Link> | 
                      <Link to="/contact" className="inline-flex items-center gap-1 text-primary-600 font-bold ml-2">Viber</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8">
                <div className="text-xs font-black uppercase tracking-widest text-secondary-400">While you wait</div>
                <Link 
                  to="/case-studies/sarisuki" 
                  className="group inline-flex items-center gap-4 bg-secondary-900 text-white px-8 py-5 rounded-full hover:bg-secondary-800 transition-all font-bold"
                >
                  Read how SariSuki grew with Jia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="pt-4">
                  <Link to="/" className="text-xs font-black uppercase tracking-widest text-secondary-400 hover:text-secondary-900 transition-colors">Return to Home</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
