import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Counter } from '../components/Counter';
import { AnimatedIcon } from '../components/AnimatedIcon';
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
      <section className="relative pt-24 pb-32 overflow-hidden bg-secondary-50">
        {/* Atmospheric Gradients */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_70%_20%,_var(--color-primary-100)_0%,_transparent_50%)] opacity-60 animate-pulse duration-[8s]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_20%_80%,_var(--color-primary-50)_0%,_transparent_50%)] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="flex-1 space-y-8"
          >
            <motion.span 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 block"
            >
              Working capital for Philippine businesses
            </motion.span>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-2"
            >
              <h1 className="fluid-h1 font-serif italic text-secondary-900 leading-[1.1] selection:bg-primary-100">
                This isn't a <br/>
                <motion.span 
                  initial={{ backgroundSize: "0% 100%" }}
                  whileInView={{ backgroundSize: "100% 100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="not-italic font-sans font-bold tracking-tight bg-linear-to-r from-primary-100 to-primary-100 bg-no-repeat bg-left-bottom"
                >
                  business problem.
                </motion.span>
              </h1>
              <h2 className="fluid-h1 font-sans font-bold tracking-tight text-secondary-900 leading-[1.1] selection:bg-primary-100">
                It's a <span className="text-primary-600 underline decoration-primary-200 decoration-8 underline-offset-8">timing problem.</span>
              </h2>
            </motion.div>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-xl text-secondary-500 leading-relaxed max-w-xl font-light"
            >
              Get working capital in less than 24 hours — so you can fill the gap between doing the work and getting paid.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Desktop CTA */}
              <Link 
                to="/apply" 
                className="liquid-cta hidden sm:inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl gap-3 group"
              >
                Get my offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Mobile CTA */}
              <a 
                href="https://wa.me/+639000000000?text=Hi+Jia"
                className="liquid-cta sm:hidden flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-xl gap-3"
              >
                Message on WhatsApp <MessageSquare className="w-4 h-4" />
              </a>

              <Link 
                to="/how-it-works" 
                className="inline-flex items-center justify-center px-10 py-5 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all font-sans glass"
              >
                See how it works
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] bg-secondary-200 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative group">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" 
                alt="Filipino business owner" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary-900/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-x-0 bottom-0 p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                 <div className="text-white">
                   <p className="font-serif italic text-2xl leading-relaxed">"Jia understands that my profit is trapped in invoices. They unlocked my growth."</p>
                 </div>
              </div>
            </div>
            {/* Visual Flair */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-2xl -z-10 rotate-12 blur-xs opacity-50" />
            <div className="absolute top-12 -left-12 p-6 glass rounded-2xl shadow-2xl z-20 hidden md:block border border-white/40">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white">
                   <AnimatedIcon icon={Zap} size={20} animation="pulse" />
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
              <AnimatedIcon icon={TrendingUp} className="text-primary-600 mb-4" />
              <div className="text-3xl font-black text-secondary-900 tracking-tighter">₱1.2B+</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-secondary-400 mt-2">Capital Funded</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-secondary-50 rounded-2xl">
              <AnimatedIcon icon={Users} className="text-primary-600 mb-4" />
              <div className="text-3xl font-black text-secondary-900 tracking-tighter">2,500+</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-secondary-400 mt-2">Businesses Served</div>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-secondary-50 rounded-2xl">
              <AnimatedIcon icon={Clock} className="text-primary-600 mb-4" />
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

      {/* 4. PAIN POINT SCENARIOS (The 3 Doors) */}
      <section 
        className="py-40 bg-white relative overflow-hidden group/section"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        {/* Mouse Spotlight */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(79, 70, 229, 0.06), transparent 40%)`
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-3 gap-8 card-reveal-animation"
          >
            {/* Card 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 45, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="card-reveal-inner"
            >
              <Link to="/invoice-factoring" className="magnetic-card premium-shadow atmospheric-glow group block h-full space-y-10 bg-white p-12 rounded-[3.5rem] border border-secondary-100 hover:border-primary-100 transition-colors">
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-[0_20px_40px_rgba(79,70,229,0.25)]">
                  <AnimatedIcon icon={FileText} size={40} trigger="hover" animation="float" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-secondary-900 tracking-tighter leading-tight italic font-serif">You delivered <br/> the work.</h3>
                  <p className="text-base text-secondary-500 leading-relaxed font-medium">
                    But your client pays in 60 days. Your team needs salaries now. Your next order can't wait.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 transition-transform group-hover:translate-x-1">
                    Invoice Factoring
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 45, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="card-reveal-inner"
            >
              <Link to="/supply-chain-financing" className="magnetic-card premium-shadow atmospheric-glow group block h-full space-y-10 bg-white p-12 rounded-[3.5rem] border border-secondary-100 hover:border-primary-100 transition-colors">
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-[0_20px_40px_rgba(79,70,229,0.25)]">
                  <AnimatedIcon icon={Package} size={40} trigger="hover" animation="float" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-secondary-900 tracking-tighter leading-tight italic font-serif">You won a <br/> big contract.</h3>
                  <p className="text-base text-secondary-500 leading-relaxed font-medium">
                    But you need cash to fulfill it before you get paid. The opportunity is real. The timing isn't.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 transition-transform group-hover:translate-x-1">
                    Supply Chain Financing
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 45, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="card-reveal-inner"
            >
              <Link to="/jia-account" className="magnetic-card premium-shadow atmospheric-glow group block h-full space-y-10 bg-white p-12 rounded-[3.5rem] border border-secondary-100 hover:border-primary-100 transition-colors">
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-[0_20px_40px_rgba(79,70,229,0.25)]">
                  <AnimatedIcon icon={Building2} size={40} trigger="hover" animation="float" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-secondary-900 tracking-tighter leading-tight italic font-serif">Your account <br/> moves with you.</h3>
                  <p className="text-base text-secondary-500 leading-relaxed font-medium">
                    Faster payments, smarter tracking, working capital when you need it. All in one place.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 transition-transform group-hover:translate-x-1">
                    Jia Account
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="fluid-h2 font-bold tracking-tight text-secondary-900">Up and running in <Counter end={24} /> hours</h2>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 relative"
          >
            {/* Step 1 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative z-10 space-y-6 bg-white p-10 rounded-[2.5rem] border border-secondary-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary-900 text-white rounded-full flex items-center justify-center text-xs font-black">01</div>
              <p className="text-xl font-bold text-secondary-900 leading-snug">Share your business info — takes less than 10 minutes</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative z-10 space-y-6 bg-white p-10 rounded-[2.5rem] border border-secondary-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary-900 text-white rounded-full flex items-center justify-center text-xs font-black">02</div>
              <p className="text-xl font-bold text-secondary-900 leading-snug">Receive a customized offer — within 24 hours of submission</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative z-10 space-y-6 bg-white p-10 rounded-[2.5rem] border border-secondary-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary-900 text-white rounded-full flex items-center justify-center text-xs font-black">03</div>
              <p className="text-xl font-bold text-secondary-900 leading-snug">Unlock working capital — up to <Counter prefix="₱" end={50} suffix=" million" /></p>
            </motion.div>
          </motion.div>

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
      <section className="py-40 bg-secondary-950 text-white relative overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary-600)_0%,_transparent_60%)]" />
          <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary-400)_0%,_transparent_50%)] opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-6"
          >
            <h2 className="fluid-h2 font-sans font-bold tracking-tight mb-8">Get a free, no-commitment offer today.</h2>
            <p className="text-2xl text-secondary-400 mb-12 font-light">We'll respond in less than 24 hours.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               {/* Desktop CTA */}
                <Link 
                  to="/apply" 
                  className="liquid-cta hidden sm:inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] gap-3 group"
                >
                  Get my offer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* Mobile CTA */}
                <a 
                  href="https://wa.me/+639000000000?text=Hi+Jia"
                  className="liquid-cta sm:hidden flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full shadow-2xl gap-3"
                >
                  Message on WhatsApp <MessageSquare className="w-5 h-5" />
                </a>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all glass-dark"
                >
                  Or contact us <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
