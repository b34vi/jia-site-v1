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
  ShieldCheck, 
  Info,
  Building2,
  Package
} from 'lucide-react';

export default function InvoiceFactoring() {
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
              Invoice Factoring
            </span>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
                You delivered <br/>
                <span className="font-serif italic font-normal">the work.</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
                Stop waiting 60 days to <span className="text-primary-600 underline decoration-primary-200">get paid.</span>
              </h2>
            </div>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-xl font-light">
              Turn unpaid invoices into working capital in less than 24 hours — so you can pay your team, restock, and take the next contract.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/apply?product=invoice-factoring" 
                className="inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center justify-center px-10 py-5 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all font-sans"
              >
                See rates
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative p-10 bg-secondary-50 rounded-[3rem] border border-secondary-100 overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
               <h3 className="text-[10px] font-black text-secondary-400 uppercase tracking-widest mb-12">The Liquidity Bridge</h3>
               
               <div className="space-y-12 relative z-10">
                 {/* Step 1 */}
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white border border-secondary-200 rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary-900 shadow-sm">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-secondary-900">Invoice Issued</div>
                      <div className="text-sm text-secondary-500 font-medium">Standard 30-90 day payment terms</div>
                    </div>
                 </div>

                 {/* The Gap Line */}
                 <div className="ml-6 border-l-2 border-dashed border-secondary-200 h-16 relative">
                    <div className="absolute top-1/2 left-4 px-3 py-1 bg-white border border-secondary-100 rounded-full text-[10px] font-black text-secondary-400 uppercase tracking-tighter shadow-sm">
                      Cash is trapped here
                    </div>
                 </div>

                 {/* Step 2 - Jia Intervention */}
                 <div className="flex items-start gap-6 bg-primary-600 p-6 rounded-3xl shadow-xl shadow-primary-600/20">
                    <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center text-primary-600">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">Jia Advances Cash</div>
                      <div className="text-[10px] font-black text-primary-100 uppercase tracking-widest mt-1">Instant Liquidity &lt; 24h</div>
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex items-start gap-6 opacity-30">
                    <div className="w-12 h-12 bg-secondary-200 rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary-500">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-secondary-900">Client Pays Later</div>
                      <div className="text-sm text-secondary-500 font-medium">Wait is eliminated for your business</div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO THIS IS FOR */}
      <section className="py-32 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">You might need this if...</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
           {[
             "Your clients are corporations or government agencies that pay on 30-90 day terms — and your business can't wait that long.",
             "You have outstanding invoices worth more than your current cash position, and growth is on hold because of it.",
             "You've been turning down new contracts because you don't have the working capital to fulfill them while waiting to get paid on existing ones."
           ].map((text, i) => (
             <div key={i} className="p-10 bg-white rounded-3xl border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center text-secondary-900 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-lg text-secondary-600 font-medium leading-relaxed">{text}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Share your invoices", desc: "Submit via our platform in minutes" },
              { title: "We verify", desc: "Our team reviews your invoices and buyers" },
              { title: "Get an offer", desc: "Up to 90% of invoice face value" },
              { title: "Receive funds", desc: "Same-day disbursement after approval" }
            ].map((step, i) => (
              <div key={i} className="space-y-6">
                <div className="text-5xl font-serif italic text-secondary-100">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="text-xl font-bold text-secondary-900">{step.title}</h4>
                <p className="text-sm text-secondary-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RATES & TERMS TABLE */}
      <section className="py-32 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Transparent pricing. No surprises.</h2>
           </div>
           
           <div className="bg-white rounded-[2rem] border border-secondary-100 shadow-xl overflow-hidden hover:timing-shadow transition-all">
             <table className="w-full text-left">
               <tbody className="divide-y divide-secondary-100">
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Advance rate</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">Up to 90% of invoice value</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Fees</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1–5% (based on size and buyer)</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Term</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1 day to 6 months</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Minimum invoice</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">₱100,000</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Approval time</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">&lt; 24 hours</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Disbursement</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">Same day after approval</td>
                 </tr>
               </tbody>
             </table>
             <div className="p-8 bg-secondary-900 text-white flex flex-col items-center sm:flex-row justify-between gap-6">
                <p className="text-xs text-secondary-400 font-medium italic">
                  Final rates depend on invoice size, buyer creditworthiness, and term length. Get your personalized offer in &lt;24 hours.
                </p>
                <Link to="/apply?product=invoice-factoring" className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-900 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-secondary-100 transition-colors">
                  Get my offer <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Are you eligible?</h2>
            <div className="space-y-4">
              {[
                "Registered business in the Philippines (SEC or DTI)",
                "At least 1 year of operating history",
                "Outstanding invoices from creditworthy buyers",
                "Valid government ID",
                "3 months bank statements"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-secondary-50">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg text-secondary-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link 
                to="/apply?product=invoice-factoring" 
                className="inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl"
              >
                Check your eligibility
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-secondary-50 rounded-[4rem] p-16 border border-secondary-100">
             <div className="space-y-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary-900 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900">Quick Approval</h3>
                <p className="text-secondary-500 text-lg leading-relaxed font-medium">
                  We review the quality of your customers and your invoices, not just your financial history. Strong buyers mean faster approvals and better rates.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER STORY PULL */}
      <section className="py-32 bg-secondary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#4f46e5_0%,_transparent_40%)] opacity-20" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-md">
            <div className="w-8 h-8 bg-white border border-secondary-800 rounded-full flex items-center justify-center text-secondary-900 font-black text-[8px]">SS</div>
            <span className="text-[10px] font-black uppercase tracking-widest">Featured Story: SariSuki</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight max-w-4xl mx-auto">
            "Onboarding with Jia was seamless. They provide our merchant network fair financing which has boosted our growth and our revenues."
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="text-[11px] font-black uppercase tracking-widest text-secondary-400">Verified Borrower: SariSuki</div>
            <Link to="/case-studies/sarisuki" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-400 transition-colors uppercase tracking-[0.2em] text-[10px]">
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Common questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What kinds of invoices can I factor?",
                a: "Invoices from creditworthy buyers — corporations, government agencies, large distributors. We review buyer credit, not just your credit history."
              },
              {
                q: "What's the difference between invoice factoring and a bank loan?",
                a: "A bank loan uses your credit history and collateral. Invoice factoring uses your invoices as the asset — so if your buyers are strong, you qualify even if you don't have collateral."
              },
              {
                q: "How quickly will I get the money?",
                a: "Same day after approval. Approval happens within 24 hours of document submission."
              },
              {
                q: "Do I need collateral?",
                a: "No. Your invoices are the collateral."
              },
              {
                q: "What happens if my buyer doesn't pay?",
                a: "Depends on your agreement type — we'll walk you through recourse vs. non-recourse options when we present your offer."
              },
              {
                q: "Is there a minimum invoice size?",
                a: "We typically work with invoices starting at ₱100,000. Contact us for cases below that threshold."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-secondary-50 border border-secondary-100 rounded-3xl group open:shadow-xl transition-all">
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
          <div className="mt-16 text-center">
             <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-secondary-900 hover:text-primary-600 transition-colors"
            >
              See all FAQs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CROSS-SELL */}
      <section className="py-32 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Also available</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/supply-chain-financing" className="p-12 bg-white rounded-[3rem] border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
               <div className="space-y-8">
                  <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <Package className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-900 tracking-tight">Supply Chain Financing</h3>
                  <p className="text-lg text-secondary-500 font-medium leading-relaxed">
                    For businesses that need to pay suppliers before receiving payment from their own customers.
                  </p>
                  <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
               </div>
            </Link>
            <Link to="/jia-account" className="p-12 bg-white rounded-[3rem] border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
               <div className="space-y-8">
                  <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-900 tracking-tight">Jia Account</h3>
                  <p className="text-lg text-secondary-500 font-medium leading-relaxed">
                    A business account designed to move as fast as your business does.
                  </p>
                  <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Ready to stop waiting to get paid?</h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
              {/* Desktop CTA */}
              <Link 
                to="/apply?product=invoice-factoring" 
                className="hidden sm:inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3"
              >
                Get my offer in &lt; 24 hours <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Mobile CTA */}
              <a 
                href="https://wa.me/+639000000000?text=Hi+Jia"
                className="sm:hidden flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full shadow-2xl gap-3"
              >
                Message us on WhatsApp <MessageSquare className="w-4 h-4" />
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
