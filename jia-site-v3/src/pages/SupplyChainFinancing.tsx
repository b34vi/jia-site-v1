import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Package, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  FileText,
  Building2,
  ShoppingCart,
  Truck
} from 'lucide-react';

export default function SupplyChainFinancing() {
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
              Supply Chain Financing
            </span>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
                Your suppliers <br/>
                <span className="font-serif italic font-normal">need to get paid.</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-secondary-500 leading-[1.1]">
                Your customers need product.
              </h2>
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
                You're <span className="text-primary-600 underline decoration-primary-200">stuck in the middle.</span>
              </h2>
            </div>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-xl font-light">
              Tap into liquidity to power your supply chain — without draining your reserves or slowing down your operation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/apply?product=supply-chain" 
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
               <h3 className="text-[10px] font-black text-secondary-400 uppercase tracking-widest mb-12">The Inventory Catalyst</h3>
               
               <div className="space-y-12 relative z-10">
                  {/* Step 1 */}
                  <div className="flex items-start gap-6">
                     <div className="w-12 h-12 bg-white border border-secondary-200 rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary-500 shadow-sm">
                       <AnimatedIcon icon={ShoppingCart} size={24} trigger="view" animation="float" />
                     </div>
                     <div>
                       <div className="font-bold text-lg text-secondary-900">Purchase Order Received</div>
                       <div className="text-sm text-secondary-500 font-medium">Big opportunity, but no cash to buy stock</div>
                     </div>
                  </div>

                 {/* The Bridge */}
                 <div className="ml-6 border-l-2 border-dashed border-secondary-200 h-16 relative">
                    <div className="absolute top-1/2 left-4 px-3 py-1 bg-white border border-secondary-100 rounded-full text-[10px] font-black text-secondary-400 uppercase tracking-tighter shadow-sm">
                      Jia unlocks the order
                    </div>
                 </div>

                  {/* Jia Step */}
                  <div className="flex items-start gap-6 bg-primary-600 p-6 rounded-3xl shadow-xl shadow-primary-600/20">
                     <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center text-primary-600">
                       <AnimatedIcon icon={Truck} size={24} trigger="view" animation="float" />
                     </div>
                     <div>
                       <div className="font-bold text-lg text-white">Suppliers Paid Directly</div>
                       <div className="text-[10px] font-black text-primary-100 uppercase tracking-widest mt-1">Goods start moving &lt; 24h</div>
                     </div>
                  </div>

                  {/* Result */}
                  <div className="flex items-start gap-6 opacity-30">
                     <div className="w-12 h-12 bg-secondary-200 rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary-500">
                       <AnimatedIcon icon={Package} size={24} trigger="view" animation="float" />
                     </div>
                     <div>
                       <div className="font-bold text-lg text-secondary-900">Order Fulfilled</div>
                       <div className="text-sm text-secondary-500 font-medium">Revenue recognized, then you repay</div>
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
             "You're a distributor or wholesaler who pays suppliers upfront but collects from buyers later.",
             "You won a big contract and need to purchase inventory or raw materials before you receive any payment.",
             "Your business is seasonal — you need to stock up before peak season but cash is tight."
           ].map((text, i) => (
             <div key={i} className="p-10 bg-white rounded-3xl border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <AnimatedIcon icon={CheckCircle2} size={24} trigger="hover" animation="draw" />
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
              { title: "Submit POs", desc: "Share purchase orders or supplier invoices in minutes" },
              { title: "Jia pays direct", desc: "We finance your supplier payment directly" },
              { title: "Receive goods", desc: "You receive goods and fulfill your business orders" },
              { title: "Repay later", desc: "Repay Jia once your buyer pays you" }
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
             <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Transparent pricing.</h2>
           </div>
           
           <div className="bg-white rounded-[2rem] border border-secondary-100 shadow-xl overflow-hidden hover:timing-shadow transition-all">
             <table className="w-full text-left">
               <tbody className="divide-y divide-secondary-100">
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Financing amount</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">Up to ₱50 million</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Fees</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1–5%</td>
                 </tr>
                 <tr>
                   <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-secondary-400">Term</td>
                   <td className="px-8 py-6 text-lg font-bold text-secondary-900">1 day to 6 months</td>
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
                  Personalized offers based on your transaction history and supplier relationships.
                </p>
                <Link to="/apply?product=supply-chain" className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-900 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-secondary-100 transition-colors">
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
                "Purchase orders or supplier invoices to finance",
                "Valid government ID",
                "3 months bank statements"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-secondary-50">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <AnimatedIcon icon={CheckCircle2} size={16} trigger="view" animation="draw" />
                  </div>
                  <span className="text-lg text-secondary-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link 
                to="/apply?product=supply-chain" 
                className="inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl"
              >
                Apply now
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-secondary-950 rounded-[4rem] p-16 text-white overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-full bg-primary-600/10 blur-[80px]" />
             <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <AnimatedIcon icon={ShieldCheck} size={32} className="text-primary-400" trigger="view" animation="pulse" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Growth Catalyst</h3>
                <p className="text-secondary-400 text-lg leading-relaxed font-light">
                  Don't let seasonal dips or large contracts strain your cash flow. Supply Chain Financing gives you the breathing room to scale while your suppliers get paid on time.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary-900">Frequently asked</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What's the difference between supply chain financing and invoice factoring?",
                a: "Invoice factoring advances cash on invoices you've already issued to buyers. Supply chain financing pays your suppliers so you can fulfill orders — it happens earlier in the cycle."
              },
              {
                q: "Do I need a purchase order?",
                a: "A purchase order helps us understand the transaction, but we review cases without POs. Tell us your situation and we'll find a structure that works."
              },
              {
                q: "Can I use this for seasonal stock-ups?",
                a: "Yes. This is one of the most common use cases — pre-peak season inventory purchasing when cash is low."
              },
              {
                q: "Do my suppliers need to be accredited by Jia?",
                a: "No. We work with your existing supplier relationships."
              },
              {
                q: "What if my buyer cancels the order?",
                a: "Talk to us before submitting. We structure deals around the risk profile of your specific transaction."
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
        </div>
      </section>

      {/* 7. CROSS-SELL */}
      <section className="py-32 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Other solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/invoice-factoring" className="p-12 bg-white rounded-[3rem] border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
               <div className="space-y-8">
                  <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <AnimatedIcon icon={FileText} size={32} trigger="hover" animation="float" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-900 tracking-tight">Invoice Factoring</h3>
                  <p className="text-lg text-secondary-500 font-medium leading-relaxed">
                    Turn your unpaid invoices into working capital instead of waiting 60+ days.
                  </p>
                  <div className="text-[11px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
               </div>
            </Link>
            <Link to="/jia-account" className="p-12 bg-white rounded-[3rem] border border-secondary-100 shadow-sm hover:timing-shadow transition-all group">
               <div className="space-y-8">
                  <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-900 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <AnimatedIcon icon={Building2} size={32} trigger="hover" animation="float" />
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

      {/* 8. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Ready to unlock your supply chain?</h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/apply?product=supply-chain" 
                className="hidden sm:inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
              </Link>
              
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
