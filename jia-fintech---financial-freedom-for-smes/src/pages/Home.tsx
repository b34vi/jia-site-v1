import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Package, 
  Building2,
  ChevronRight,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-32 overflow-hidden bg-secondary-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-50 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 block">
              Working capital for Philippine businesses
            </span>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-serif italic text-secondary-900 leading-[1.1]">
                This isn't a <br/>
                <span className="not-italic font-sans font-bold tracking-tight">business problem.</span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
                It's a <span className="text-primary-600 underline decoration-primary-200">timing problem.</span>
              </h2>
            </div>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-xl font-light">
              Get working capital in less than 24 hours — so you can fill the gap between doing the work and getting paid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Desktop CTA */}
              <Link 
                to="/apply" 
                className="hidden sm:inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Mobile CTA */}
              <a 
                href="https://wa.me/+639000000000?text=Hi+Jia"
                className="sm:hidden flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-xl gap-3"
              >
                Message on WhatsApp <MessageSquare className="w-4 h-4" />
              </a>

              <Link 
                to="/how-it-works" 
                className="inline-flex items-center justify-center px-10 py-5 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all font-sans"
              >
                See how it works
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] bg-secondary-200 rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" 
                alt="Filipino business owner" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-secondary-900/60 to-transparent">
                 <div className="text-white">
                   <p className="font-serif italic text-xl">"Jia understands that my profit is trapped in invoices. They unlocked my growth."</p>
                 </div>
              </div>
            </div>
            {/* Visual Flair */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-2xl -z-10 rotate-12" />
            <div className="absolute top-12 -left-12 p-6 bg-white rounded-2xl shadow-xl z-20 hidden md:block border border-secondary-100">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                   <Zap className="w-5 h-5" />
                 </div>
                 <div>
                   <div className="text-[10px] font-black uppercase text-secondary-400">Offer Speed</div>
                   <div className="text-sm font-bold text-secondary-900">Under 24 Hours</div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-20 bg-white border-b border-secondary-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-8 bg-secondary-50 rounded-2xl">
              <TrendingUp className="w-6 h-6 text-primary-600 mb-4" />
              <div className="text-3xl font-black text-secondary-900 tracking-tighter">₱1.2B+</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-secondary-400 mt-2">Capital Funded</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-secondary-50 rounded-2xl">
              <Users className="w-6 h-6 text-primary-600 mb-4" />
              <div className="text-3xl font-black text-secondary-900 tracking-tighter">2,500+</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-secondary-400 mt-2">Businesses Served</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-secondary-50 rounded-2xl">
              <Clock className="w-6 h-6 text-primary-600 mb-4" />
              <div className="text-3xl font-black text-secondary-900 tracking-tighter">&lt;24h</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-secondary-400 mt-2">Offer Turnaround</div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-100 transition-all duration-500">
            <span className="text-xl font-black tracking-tighter">SARISUKI</span>
            <span className="text-xl font-black tracking-tighter">PC CANLAS</span>
            <span className="text-xl font-black tracking-tighter">FOODPANDA</span>
            <span className="text-xl font-black tracking-tighter">LALAMOVE</span>
          </div>
        </div>
      </section>

      {/* 3. THE GAP STATEMENT */}
      <section className="py-32 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">Banks ask if your business is broken.</h2>
              <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight leading-tight">We ask when you need cash.</h2>
            </div>
            <p className="text-xl text-secondary-400 leading-relaxed font-light">
              Banks are built for stability. Your business runs on timing — supplier deadlines, invoice cycles, seasonal orders. We built Jia specifically for the gap between delivering work and actually getting paid.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PAIN POINT SCENARIOS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <Link to="/invoice-factoring" className="group space-y-6">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">You delivered the work.</h3>
              <p className="text-sm text-secondary-500 leading-relaxed font-medium">
                But your client pays in 60 days. Your team needs salaries now. Your next order can't wait.
              </p>
              <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Invoice Factoring <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/supply-chain-financing" className="group space-y-6">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">You won a big contract.</h3>
              <p className="text-sm text-secondary-500 leading-relaxed font-medium">
                But you need cash to fulfill it before you get paid. The opportunity is real. The timing isn't.
              </p>
              <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Supply Chain Financing <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/jia-account" className="group space-y-6">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">Your bank account doesn't move like your business.</h3>
              <p className="text-sm text-secondary-500 leading-relaxed font-medium">
                Faster payments, smarter tracking, working capital when you need it. All in one place.
              </p>
              <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Jia Account <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Up and running in 24 hours</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative z-10 space-y-6 bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm">
              <div className="w-10 h-10 bg-secondary-900 text-white rounded-full flex items-center justify-center text-xs font-black">01</div>
              <p className="text-lg font-bold text-secondary-900 leading-snug">Share your business info — takes less than 10 minutes</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 space-y-6 bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm">
              <div className="w-10 h-10 bg-secondary-900 text-white rounded-full flex items-center justify-center text-xs font-black">02</div>
              <p className="text-lg font-bold text-secondary-900 leading-snug">Receive a customized offer — within 24 hours of submission</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 space-y-6 bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm">
              <div className="w-10 h-10 bg-secondary-900 text-white rounded-full flex items-center justify-center text-xs font-black">03</div>
              <p className="text-lg font-bold text-secondary-900 leading-snug">Unlock working capital — up to ₱50 million</p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/how-it-works" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-secondary-900 hover:text-primary-600 transition-colors"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER STORY */}
      <section className="py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Real businesses. Real timing problems.</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 font-sans">
            {/* Featured */}
            <div className="lg:col-span-8 group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="SariSuki" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary-900 via-secondary-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-900 font-black">SS</div>
                     <div>
                       <div className="text-white font-bold text-xl">SariSuki</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Retail / Distribution</div>
                     </div>
                   </div>
                   <p className="text-white text-2xl font-serif italic max-w-2xl leading-relaxed">
                     "Onboarding with Jia was seamless. They provide our merchant network fair financing which has boosted our growth and our revenues."
                   </p>
                   <div className="flex items-center justify-between">
                     <div className="text-[10px] font-black uppercase tracking-widest text-secondary-300">Name, SariSuki</div>
                     <Link to="/case-studies" className="text-white text-xs font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                       Read their story <ArrowRight className="w-4 h-4" />
                     </Link>
                   </div>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="lg:col-span-4 flex flex-col justify-between p-10 bg-secondary-50 rounded-3xl group">
               <div className="space-y-6">
                 <div className="text-[10px] font-black uppercase tracking-widest text-primary-600">Construction</div>
                 <h3 className="text-3xl font-bold text-secondary-900 tracking-tight">PC Canlas Builders</h3>
                 <p className="text-secondary-500 font-medium leading-relaxed">
                   Used invoice financing to bridge the gap between project delivery and client payment.
                 </p>
               </div>
               <Link to="/case-studies" className="text-secondary-900 font-black text-xs uppercase tracking-widest flex items-center gap-2 mt-8 group-hover:translate-x-2 transition-transform">
                 Read more <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
             <Link 
              to="/case-studies" 
              className="px-10 py-5 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all font-sans"
            >
              See all case studies
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white relative overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#4f46e5_0%,_transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-6">Get a free, no-commitment offer today.</h2>
          <p className="text-xl text-secondary-400 mb-12 font-light">We'll respond in less than 24 hours.</p>
          
          <div className="flex flex-col sm:flex-row gap-6">
             {/* Desktop CTA */}
              <Link 
                to="/apply" 
                className="hidden sm:inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Mobile CTA */}
              <a 
                href="https://wa.me/+639000000000?text=Hi+Jia"
                className="sm:hidden flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full shadow-2xl gap-3"
              >
                Message on WhatsApp <MessageSquare className="w-4 h-4" />
              </a>

              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all"
              >
                Or contact us <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
