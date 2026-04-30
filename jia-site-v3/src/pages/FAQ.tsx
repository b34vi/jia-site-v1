import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  ChevronRight, 
  Search,
  BookOpen,
  Zap,
  CreditCard,
  ShieldCheck,
  Building2
} from 'lucide-react';

const categories = [
  {
    id: 'started',
    title: 'Getting Started',
    icon: <BookOpen className="w-5 h-5" />,
    faqs: [
      {
        q: "Who is Jia?",
        a: "Jia is a Philippine-based financing company that provides working capital to SMEs through invoice factoring and supply chain financing. We're registered with the SEC and supervised by the BSP."
      },
      {
        q: "Am I eligible?",
        a: "If your business is registered in the Philippines (SEC or DTI), has been operating for at least a year, and has invoices from creditworthy buyers or purchase orders to finance — you're a strong candidate. Apply and we'll tell you within 24 hours."
      },
      {
        q: "What's the minimum loan size?",
        a: "Our typical financing starts at ₱100,000. For smaller amounts, message us directly — we review cases individually and are expanding our products to support micro-SMEs."
      }
    ]
  },
  {
    id: 'products',
    title: 'Products',
    icon: <Zap className="w-5 h-5" />,
    faqs: [
      {
        q: "What's the difference between invoice factoring and supply chain financing?",
        a: "Invoice factoring turns invoices you've already issued into cash now. Supply chain financing pays your suppliers so you can fulfill orders. One works on the collection side, the other on the payment side."
      },
      {
        q: "Can I use both at the same time?",
        a: "Yes. Some of our borrowers use invoice factoring to collect faster while using supply chain financing to pay suppliers, maximizing their total liquidity."
      },
      {
        q: "What is Jia Account?",
        a: "A business financial account for Philippine SMEs with faster payments, real-time cash flow visibility, and built-in working capital access. It's designed to be your business's financial command center."
      }
    ]
  },
  {
    id: 'process',
    title: 'Application & Process',
    icon: <Building2 className="w-5 h-5" />,
    faqs: [
      {
        q: "How long does the application take?",
        a: "Less than 10 minutes online. Our application is designed for busy business owners — no long forms or branch visits required."
      },
      {
        q: "What documents do I need?",
        a: "Valid government ID, SEC/DTI registration, 3 months bank statements. For financing: your invoices or purchase orders. You can see the full checklist on our How It Works page."
      },
      {
        q: "How quickly will I get an answer?",
        a: "Within 24 hours of submitting complete documents. We pride ourselves on speed because we know timing is everything in business."
      },
      {
        q: "Do you check my credit score?",
        a: "We look at your invoices and buyers, not just your credit history. A low credit score doesn't automatically disqualify you if your business transaction strength is high."
      }
    ]
  },
  {
    id: 'rates',
    title: 'Rates & Repayment',
    icon: <CreditCard className="w-5 h-5" />,
    faqs: [
      {
        q: "What are your rates?",
        a: "1–5% depending on invoice size, buyer creditworthiness, and term. We provide a full breakdown in your personalized offer before you accept anything."
      },
      {
        q: "Are there hidden fees?",
        a: "No. Your offer shows the full cost before you accept. No application fees, no processing surprises, no late fee traps."
      },
      {
        q: "Is there a penalty for early repayment?",
        a: "No. We encourage businesses to repay as soon as they have the cash. There is no penalty for settling your balance early."
      },
      {
        q: "How do I repay?",
        a: "Repayment is structured around your cash flow cycle — usually matched to when your buyer pays you or at the end of your agreed term via bank transfer or PESONet/InstaPay."
      }
    ]
  },
  {
    id: 'safety',
    title: 'Trust & Safety',
    icon: <ShieldCheck className="w-5 h-5" />,
    faqs: [
      {
        q: "Is Jia legitimate?",
        a: "Yes. Jia Financing Inc. is a duly registered financing company with the Philippine SEC (Co. Reg. #2022090000). We adhere to all local financial regulations."
      },
      {
        q: "Is my data safe?",
        a: "Yes. We use bank-grade encryption and are fully compliant with the Data Privacy Act of 2012. Your business data is used strictly for underwriting and account management."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-32 overflow-hidden bg-white border-b border-secondary-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
              Frequently asked <br/>
              <span className="font-serif italic font-normal text-primary-600">questions.</span>
            </h1>
            
            {/* V1: No search bar as requested, but keeping area clean */}
            <div className="max-w-xl mx-auto h-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-secondary-100 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ACCORDION CATEGORIES */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {categories.map((category, catIdx) => (
            <div key={category.id} className="mb-20 last:mb-0">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-secondary-100 flex items-center justify-center text-primary-600">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-[0.2em] text-secondary-900">{category.title}</h2>
               </div>
               
               <div className="space-y-4">
                 {category.faqs.map((faq, i) => (
                   <details key={i} className="bg-white border border-secondary-100 rounded-3xl group open:shadow-xl transition-all">
                     <summary className="p-8 cursor-pointer list-none flex items-center justify-between">
                       <h4 className="text-lg font-bold text-secondary-900 leading-tight">{faq.q}</h4>
                       <ChevronRight className="w-6 h-6 text-secondary-400 group-open:rotate-90 transition-transform" />
                     </summary>
                     <div className="px-8 pb-8 text-secondary-600 font-medium leading-relaxed">
                       {faq.a}
                       {faq.q === "What is Jia Account?" && (
                         <div className="mt-4">
                            <Link to="/jia-account" className="text-xs font-black uppercase tracking-widest text-primary-600 flex items-center gap-1 hover:translate-x-1 transition-transform">
                              Learn about Jia Account <ArrowRight className="w-3 h-3" />
                            </Link>
                         </div>
                       )}
                       {faq.q === "What documents do I need?" && (
                         <div className="mt-4">
                            <Link to="/how-it-works" className="text-xs font-black uppercase tracking-widest text-primary-600 flex items-center gap-1 hover:translate-x-1 transition-transform">
                              See full checklist <ArrowRight className="w-3 h-3" />
                            </Link>
                         </div>
                       )}
                       {faq.q === "What are your rates?" && (
                         <div className="mt-4">
                            <Link to="/pricing" className="text-xs font-black uppercase tracking-widest text-primary-600 flex items-center gap-1 hover:translate-x-1 transition-transform">
                              See full pricing <ArrowRight className="w-3 h-3" />
                            </Link>
                         </div>
                       )}
                     </div>
                   </details>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS? */}
      <section className="py-32 bg-white font-sans text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Still have questions?</h2>
            <p className="text-xl text-secondary-500 font-light">Our team typically responds within a few hours.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a 
                href="https://wa.me/+639000000000?text=Hi+Jia"
                className="inline-flex items-center justify-center px-12 py-6 bg-secondary-900 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-800 transition-all shadow-xl gap-3"
              >
                Message on WhatsApp <MessageSquare className="w-4 h-4" />
              </a>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-12 py-6 border border-secondary-200 text-secondary-900 font-bold uppercase tracking-widest text-sm rounded-full hover:border-secondary-900 transition-all gap-3"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
        </div>
      </section>

      {/* Final Application CTA */}
      <section className="py-24 bg-secondary-950 text-white relative overflow-hidden font-sans">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-600/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight">Ready to unlock your capital?</h2>
              <p className="text-secondary-400 mt-2">Apply in less than 10 minutes.</p>
           </div>
           <Link to="/apply" className="inline-flex items-center justify-center px-10 py-5 bg-white text-secondary-900 font-black uppercase tracking-widest text-xs rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3">
             Get my offer <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>
    </div>
  );
}
