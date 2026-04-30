import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  TrendingUp,
  Link as LinkIcon,
  ShieldCheck,
  Building2,
  Clock,
  Smartphone
} from 'lucide-react';

export default function JiaAccount() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-32 overflow-hidden bg-white border-b border-secondary-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 block">
              Jia Account
            </span>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
                Banking that moves <br/>
                <span className="font-serif italic font-normal text-primary-600">as fast as your business.</span>
              </h1>
            </div>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-xl font-light">
              A business account built for Philippine SMEs — with faster payments, smarter tracking, and working capital access when you need it. All in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/apply?role=account" 
                className="inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl gap-3"
              >
                Open an account <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center px-10 py-5 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all font-sans"
              >
                Learn more
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative p-10 bg-secondary-900 rounded-[3rem] border border-secondary-800 overflow-hidden shadow-2xl aspect-[9/16] max-w-[320px] mx-auto grayscale-[20%]">
               <div className="space-y-8 text-white relative z-10">
                  <div className="flex justify-between items-center opacity-40">
                    <div className="text-[10px] font-black uppercase tracking-widest">Jia Business</div>
                    <Smartphone className="w-4 h-4" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest">CASH BALANCE</div>
                    <div className="text-3xl font-bold tracking-tighter">₱1,420,550.00</div>
                  </div>

                  <div className="h-40 bg-white/5 rounded-3xl p-6 border border-white/5 flex flex-col justify-between">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Locked Profit</div>
                      <div className="text-xl font-bold">₱450,000.00</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                     {[1, 2, 3].map(i => (
                       <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 opacity-40">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-white/10 rounded-lg" />
                           <div className="h-2 w-20 bg-white/10 rounded-full" />
                         </div>
                         <div className="h-2 w-12 bg-white/10 rounded-full" />
                       </div>
                     ))}
                  </div>
               </div>
               <div className="absolute top-2 w-16 h-4 bg-secondary-800 left-1/2 -translate-x-1/2 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURES */}
      <section id="features" className="py-32 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="p-10 bg-white rounded-3xl border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all mb-8">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight mb-4">Faster payments</h3>
              <p className="text-secondary-500 font-medium leading-relaxed">
                Send and receive payments faster than traditional banks — including batch payroll and supplier payments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 bg-white rounded-3xl border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all mb-8">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight mb-4">Real-time cash flow view</h3>
              <p className="text-secondary-500 font-medium leading-relaxed">
                See exactly where your money is, what's coming in, and what's going out — without waiting for month-end.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 bg-white rounded-3xl border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all mb-8">
                <LinkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight mb-4">Lending built in</h3>
              <p className="text-secondary-500 font-medium leading-relaxed">
                When your Jia Account shows a cash flow gap, apply for working capital in the same platform — no separate application.
              </p>
            </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900">What Jia Account gives you that your bank doesn't</h2>
          </div>
          
          <div className="bg-white rounded-[2rem] border border-secondary-100 shadow-xl overflow-hidden">
             <table className="w-full text-left">
               <thead>
                 <tr className="bg-secondary-50">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Feature</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-primary-600">Jia Account</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Traditional Bank</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-secondary-100">
                 {[
                   ["Working capital access", "Same platform", "Separate process"],
                   ["Payment speed", "Same day", "1–3 business days"],
                   ["Cash flow visibility", "Real-time", "End of statement"],
                   ["Setup time", "< 24 hours", "Days to weeks"],
                   ["Branch visits required", "No", "Often yes"]
                 ].map(([feat, jia, trad], i) => (
                   <tr key={i} className="hover:bg-secondary-50/50 transition-colors">
                     <td className="px-8 py-6 text-sm font-bold text-secondary-900">{feat}</td>
                     <td className="px-8 py-6 text-sm font-black text-primary-600">{jia}</td>
                     <td className="px-8 py-6 text-sm font-medium text-secondary-400">{trad}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-32 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Is Jia Account a bank account?",
                a: "Jia Account is a business financial account regulated under Philippine SEC and BSP guidelines. We leverage secure infrastructure to provide faster clearing and smarter lending integration than traditional banking legacy systems."
              },
              {
                q: "How do I open an account?",
                a: "Fill out our online form. We'll review your business details and respond within 24 hours. The process is 100% digital — no branch visits required."
              },
              {
                q: "Is my money protected?",
                a: "Yes. Jia operates under strict regulatory frameworks in the Philippines, ensuring and verifying that all funds are handled according to SEC and BSP standards for financial institutions."
              },
              {
                q: "Can I use Jia Account without taking a loan?",
                a: "Absolutely. The account stands on its own as a powerful tool for cash flow management. Working capital options are always available when you need them, but never required."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-secondary-100 rounded-3xl group open:shadow-xl transition-all">
                <summary className="p-8 cursor-pointer list-none flex items-center justify-between">
                  <h4 className="text-lg font-bold text-secondary-900">{faq.q}</h4>
                  <ChevronRight className="w-6 h-6 text-secondary-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-8 pb-8 text-secondary-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-4xl">Ready for a business account that works harder?</h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/apply?role=account" 
                className="inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3"
              >
                Open an account <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all"
              >
                Talk to an expert <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
        </div>
      </section>

      {/* Cross-Sell */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-900 italic">Maximize your liquidity</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/invoice-factoring" className="p-10 border border-secondary-100 rounded-3xl hover:timing-shadow transition-all group flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-secondary-50 text-secondary-900 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 uppercase tracking-widest text-xs">Invoice Factoring</h4>
                    <p className="text-[10px] text-secondary-400 font-black uppercase tracking-tighter mt-1">Cash in &lt; 24h</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-secondary-300 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/supply-chain-financing" className="p-10 border border-secondary-100 rounded-3xl hover:timing-shadow transition-all group flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-secondary-50 text-secondary-900 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 uppercase tracking-widest text-xs">Supply Chain Financing</h4>
                    <p className="text-[10px] text-secondary-400 font-black uppercase tracking-tighter mt-1">Power your inventory</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-secondary-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);

const Package = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.27 6.96 8.73 5.04 8.73-5.04"/><path d="M12 22.08V12"/></svg>
);
