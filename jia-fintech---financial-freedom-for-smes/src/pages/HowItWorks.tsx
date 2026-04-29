import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  Download,
  Calculator,
  UserCheck,
  CreditCard
} from 'lucide-react';

export default function HowItWorks() {
  const [amount, setAmount] = useState(1000000); // 1M PHP
  const [product, setProduct] = useState('factoring');
  const [term, setTerm] = useState(60);

  const calculateEstimate = () => {
    const advanceRate = 0.90;
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
      <section className="relative pt-12 pb-32 overflow-hidden bg-secondary-900 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-600/10 to-transparent blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight leading-[1.1]">
              From application to capital <br/>
              <span className="font-serif italic font-normal text-primary-400">in 24 hours.</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed max-w-2xl mx-auto font-light">
              No branch visits. No complicated paperwork. A real person reviews your file and gets back to you fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STEP-BY-STEP PROCESS */}
      <section className="py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-secondary-900 text-white rounded-full flex items-center justify-center text-sm font-black">01</div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">Apply (5–10 mins)</h3>
              <p className="text-secondary-500 font-medium leading-relaxed italic">
                "Tell us about your business and what you need. No long forms."
              </p>
              <div className="space-y-2 pt-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-4">Documents needed:</div>
                {["Valid government ID", "SEC or DTI registration", "3 months bank statements", "Invoices / POs"].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-secondary-700">
                    <CheckCircle2 className="w-3 h-3 text-primary-600" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-secondary-900 text-white rounded-full flex items-center justify-center text-sm font-black">02</div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">We review (&lt;24h)</h3>
              <p className="text-secondary-500 font-medium leading-relaxed italic">
                "Our team reviews your application and the strength of your invoices — not just your credit score."
              </p>
              <div className="pt-4 flex items-center gap-3">
                 <div className="w-10 h-10 bg-secondary-50 rounded-xl flex items-center justify-center text-primary-600">
                    <Zap className="w-5 h-5" />
                 </div>
                 <span className="text-xs font-black uppercase tracking-widest text-secondary-400">Asset-Based Underwriting</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-secondary-900 text-white rounded-full flex items-center justify-center text-sm font-black">03</div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">Get an offer</h3>
              <p className="text-secondary-500 font-medium leading-relaxed italic">
                "A personalized offer arrives — amount, rate, term. No commitment until you accept."
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-black">04</div>
              <h3 className="text-2xl font-bold text-secondary-900 tracking-tight">Funds released</h3>
              <p className="text-secondary-500 font-medium leading-relaxed italic">
                "Accept the offer. Funds hit your account the same day."
              </p>
              <div className="pt-4">
                 <div className="px-6 py-4 bg-secondary-900 text-white rounded-2xl flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest">Status</span>
                    <span className="text-xs font-bold text-primary-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Same Day
                    </span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUILT-IN CALCULATOR */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Estimate your offer</h2>
              <div className="space-y-10 bg-white p-10 rounded-[3rem] border border-secondary-100 shadow-xl">
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
                    className="w-full h-2 bg-secondary-100 rounded-lg appearance-none cursor-pointer accent-primary-600"
                   />
                 </div>

                 {/* Product */}
                 <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setProduct('factoring')}
                      className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${product === 'factoring' ? 'bg-secondary-900 text-white' : 'bg-secondary-50 text-secondary-400 border border-secondary-100'}`}
                    >
                      Invoice Factoring
                    </button>
                    <button 
                      onClick={() => setProduct('supply')}
                      className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${product === 'supply' ? 'bg-secondary-900 text-white' : 'bg-secondary-50 text-secondary-400 border border-secondary-100'}`}
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
                        className={`py-3 rounded-xl text-xs font-bold transition-all ${term === t ? 'bg-primary-600 text-white' : 'bg-secondary-50 text-secondary-500 hover:bg-secondary-100'}`}
                       >
                         {t} Days
                       </button>
                     ))}
                   </div>
                 </div>
              </div>
            </div>

            <div className="bg-secondary-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-[100px]" />
               <div className="relative z-10 space-y-12">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-2">Estimated Advance</div>
                    <div className="text-5xl font-black text-primary-400">₱{estimate.advance.toLocaleString()}</div>
                    <div className="text-[10px] font-medium text-secondary-400 mt-2 italic">Up to 90% of invoice value</div>
                  </div>
                  
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-2">Estimated Fee</div>
                    <div className="text-3xl font-bold">₱{estimate.fee.toLocaleString()}</div>
                    <div className="text-[10px] font-medium text-secondary-400 mt-1 italic">Based on term and average credit profile</div>
                  </div>

                  <div className="pt-8 space-y-6">
                    <p className="text-xs text-secondary-400 italic">
                      Estimate only. Final offer depends on buyer creditworthiness and document review.
                    </p>
                    <Link 
                      to="/apply" 
                      className="inline-flex items-center justify-center w-full px-10 py-5 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all gap-3"
                    >
                      Get my actual offer <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCUMENT CHECKLIST */}
      <section className="py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
             <div className="space-y-4">
               <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Document Checklist</h2>
               <p className="text-secondary-500 font-medium">What you'll need to submit with your application.</p>
             </div>
             <button className="flex items-center gap-2 px-6 py-3 border border-secondary-200 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary-50 transition-colors">
               <Download className="w-4 h-4" /> Download PDF
             </button>
           </div>

           <div className="grid md:grid-cols-3 gap-12">
             {/* General */}
             <div className="p-10 bg-secondary-50 rounded-[3rem] space-y-8">
               <h4 className="text-xs font-black uppercase tracking-widest text-primary-600">Base Requirements</h4>
               <div className="space-y-4">
                 {[
                   "Valid government ID (any 2)",
                   "SEC or DTI Certificate",
                   "Business / Mayor's Permit",
                   "BIR Form 2303",
                   "3 months bank statements"
                 ].map((doc, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <CheckCircle2 className="w-5 h-5 text-secondary-900 mt-0.5" />
                     <span className="text-secondary-600 font-bold text-sm tracking-tight">{doc}</span>
                   </div>
                 ))}
               </div>
             </div>

             {/* Factoring */}
             <div className="p-10 bg-white border border-secondary-100 rounded-[3rem] space-y-8 shadow-sm">
               <h4 className="text-xs font-black uppercase tracking-widest text-secondary-900">For Invoice Factoring</h4>
               <div className="space-y-4">
                 {[
                   "Outstanding invoices with buyer details",
                   "Proof of delivery (if available)",
                   "Buyer contact info for verification"
                 ].map((doc, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <FileText className="w-5 h-5 text-secondary-400 mt-0.5" />
                     <span className="text-secondary-600 font-medium text-sm tracking-tight">{doc}</span>
                   </div>
                 ))}
               </div>
               <div className="pt-4">
                 <Link to="/invoice-factoring" className="text-[10px] font-black uppercase tracking-widest text-primary-600">View Product Details →</Link>
               </div>
             </div>

             {/* Supply Chain */}
             <div className="p-10 bg-white border border-secondary-100 rounded-[3rem] space-y-8 shadow-sm">
               <h4 className="text-xs font-black uppercase tracking-widest text-secondary-900">For Supply Chain</h4>
               <div className="space-y-4">
                 {[
                   "Purchase orders from your buyers",
                   "Supplier invoices to be financed",
                   "Buyer agreement (if applicable)"
                 ].map((doc, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <CreditCard className="w-5 h-5 text-secondary-400 mt-0.5" />
                     <span className="text-secondary-600 font-medium text-sm tracking-tight">{doc}</span>
                   </div>
                 ))}
               </div>
               <div className="pt-4">
                 <Link to="/supply-chain-financing" className="text-[10px] font-black uppercase tracking-widest text-primary-600">View Product Details →</Link>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. FAQ TEASER */}
      <section className="py-32 bg-secondary-900 text-white font-sans overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Common pre-application questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What if I don't have all the documents?",
                a: "Apply anyway. Tell us what you have and we'll tell you what else we need. We're here to solve timing problems, not create administrative ones."
              },
              {
                q: "Do you check my credit score?",
                a: "We look at the full picture — your business history, your buyers' creditworthiness, your invoices. One weak credit score doesn't automatically disqualify you."
              },
              {
                q: "Can I apply if my business is less than a year old?",
                a: "Talk to us. We typically look for some operating history, but we review cases on their individual merits and transaction strength."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white/5 border border-white/10 rounded-3xl group open:bg-white/10 transition-all">
                <summary className="p-8 cursor-pointer list-none flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white">{faq.q}</h4>
                  <ChevronRight className="w-6 h-6 text-secondary-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-8 pb-8 text-secondary-300 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-primary-400 transition-colors"
            >
              See all FAQs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 bg-white text-center font-sans">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary-900">Ready to apply?</h2>
           <p className="text-xl text-secondary-500 font-light">Takes less than 10 minutes. We respond in &lt;24 hours.</p>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-12 py-6 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="https://wa.me/+639000000000?text=Hi+Jia"
                className="inline-flex items-center justify-center px-12 py-6 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all gap-3"
              >
                Message on WhatsApp <MessageSquare className="w-4 h-4" />
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
