import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  TrendingUp,
  Info,
  ShieldCheck,
  Building2,
  FileText,
  Clock,
  HelpCircle,
  Calculator
} from 'lucide-react';

export default function Pricing() {
  const [amount, setAmount] = useState(1000000); // 1M PHP
  const [product, setProduct] = useState('factoring');
  const [term, setTerm] = useState(60);

  const calculateEstimate = () => {
    const advanceRate = product === 'factoring' ? 0.90 : 1.0;
    const feeRate = product === 'factoring' ? (term / 30) * 0.015 : (term / 30) * 0.02;
    
    return {
      advance: amount * advanceRate,
      fee: amount * feeRate
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-32 overflow-hidden bg-white border-b border-secondary-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
              Transparent pricing. <br/>
              <span className="font-serif italic font-normal text-primary-600">No hidden fees.</span>
            </h1>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-2xl mx-auto font-light">
              We show you what you'll pay before you sign anything. Always. Your final offer is personalized — but here's how our pricing works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PRICING TABLE */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[3rem] border border-secondary-100 shadow-xl overflow-hidden mb-20">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-secondary-900 text-white">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest opacity-60">Structure</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Invoice Factoring</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Supply Chain</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-secondary-100">
                 <tr className="hover:bg-secondary-50/50 transition-colors">
                   <td className="px-8 py-6 text-sm font-bold text-secondary-400">Fee range</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1–5%</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1–5%</td>
                 </tr>
                 <tr className="hover:bg-secondary-50/50 transition-colors text-xs">
                   <td className="px-8 py-6 text-sm font-bold text-secondary-400">Based on</td>
                   <td className="px-8 py-6 text-secondary-600 font-medium">Invoice size + buyer credit</td>
                   <td className="px-8 py-6 text-secondary-600 font-medium">PO size + term length</td>
                 </tr>
                 <tr className="hover:bg-secondary-50/50 transition-colors">
                   <td className="px-8 py-6 text-sm font-bold text-secondary-400">Advance rate</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">Up to 90%</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">Up to 100% of PO</td>
                 </tr>
                 <tr className="hover:bg-secondary-50/50 transition-colors">
                   <td className="px-8 py-6 text-sm font-bold text-secondary-400">Term</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1d – 6 months</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1d – 6 months</td>
                 </tr>
                 <tr className="hover:bg-secondary-50/50 transition-colors">
                   <td className="px-8 py-6 text-sm font-bold text-secondary-400">Processing fee</td>
                   <td className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary-600">None</td>
                   <td className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary-600">None</td>
                 </tr>
                 <tr className="hover:bg-secondary-50/50 transition-colors">
                   <td className="px-8 py-6 text-sm font-bold text-secondary-400">Early repayment</td>
                   <td className="px-8 py-6 text-xs font-black uppercase tracking-widest text-secondary-900">No penalty</td>
                   <td className="px-8 py-6 text-xs font-black uppercase tracking-widest text-secondary-900">No penalty</td>
                 </tr>
               </tbody>
             </table>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-secondary-400 mb-8">What affects your rate</h3>
            {[
              {
                q: "Invoice or PO amount",
                a: "Larger transactions typically qualify for lower percentage fees as fixed costs are spread over a larger total. Volume commitments with Jia also drive lower rates."
              },
              {
                q: "Your buyer's creditworthiness",
                a: "Since we look at the strength of the invoice, having a creditworthy buyer (like a major corporation or government agency) reduces risk and lowers your rate."
              },
              {
                q: "Term length",
                a: "Shorter terms generally result in lower total fees. You only pay for the timing gap you actually need for your specific transaction."
              },
              {
                q: "Your business history with Jia",
                a: "Repeat borrowers with a strong repayment track record on our platform unlock legacy rates and higher advance caps."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-secondary-100 rounded-3xl group transition-all">
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

      {/* 3. LIVE ESTIMATOR */}
      <section className="py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Run the numbers on your deal</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 bg-secondary-50 p-10 rounded-[3rem] border border-secondary-100 shadow-sm">
                 {/* Amount */}
                 <div className="space-y-4">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-secondary-400">
                     <span>Invoice/PO Amount</span>
                     <span className="text-secondary-900">₱{amount.toLocaleString()}</span>
                   </div>
                   <input 
                    type="range" 
                    min="100000" 
                    max="50000000" 
                    step="100000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                   />
                 </div>

                 {/* Product */}
                 <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setProduct('factoring')}
                      className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${product === 'factoring' ? 'bg-secondary-900 text-white shadow-xl' : 'bg-white text-secondary-400 border border-secondary-100'}`}
                    >
                      Invoice Factoring
                    </button>
                    <button 
                      onClick={() => setProduct('supply')}
                      className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${product === 'supply' ? 'bg-secondary-900 text-white shadow-xl' : 'bg-white text-secondary-400 border border-secondary-100'}`}
                    >
                      Supply Chain
                    </button>
                 </div>

                 {/* Term */}
                 <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Preferred Term</div>
                   <div className="grid grid-cols-3 gap-2">
                     {[30, 60, 90, 180].map(t => (
                       <button 
                        key={t}
                        onClick={() => setTerm(t)}
                        className={`py-3 rounded-xl text-xs font-bold transition-all ${term === t ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-secondary-500 border border-secondary-100 hover:bg-secondary-100'}`}
                       >
                         {t} Days
                       </button>
                     ))}
                   </div>
                 </div>
            </div>

            <div className="bg-secondary-900 rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-[100px]" />
               <div className="relative z-10 space-y-12">
                  <div className="flex items-center gap-4 text-primary-400">
                    <Calculator className="w-8 h-8" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Pricing Estimate</span>
                  </div>

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-2">Estimated Advance</div>
                    <div className="text-5xl font-black text-white">₱{estimate.advance.toLocaleString()}</div>
                    <div className="text-[10px] font-medium text-secondary-400 mt-2 italic">Up to {product === 'factoring' ? '90%' : '100%'} of face value</div>
                  </div>
                  
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-2">Estimated Fee</div>
                    <div className="text-3xl font-bold text-primary-400">₱{estimate.fee.toLocaleString()}</div>
                    <div className="text-[10px] font-medium text-secondary-400 mt-1 italic">Personalized rate applies</div>
                  </div>

                  <div className="pt-8 space-y-6">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <Info className="w-4 h-4 text-secondary-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-secondary-400 italic leading-relaxed">
                        Estimate only. Final offer depends on buyer creditworthiness, document review, and transaction risk profile.
                      </p>
                    </div>
                    <Link 
                      to="/apply" 
                      className="inline-flex items-center justify-center w-full px-10 py-5 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all gap-3 shadow-xl"
                    >
                      Get actual offer <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-12">
           <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary-900">Get your personalized offer — no commitment.</h2>
             <p className="text-secondary-500 text-lg font-light">We'll review your file and respond in less than 24 hours.</p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-12 py-6 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl gap-3"
              >
                Apply now <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="flex flex-col items-center gap-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-12 py-6 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all gap-3"
                >
                  Message us <MessageSquare className="w-4 h-4" />
                </Link>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Want to talk it through first?</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
