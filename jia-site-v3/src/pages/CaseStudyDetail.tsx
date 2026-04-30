import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Building2,
  FileText,
  Clock,
  TrendingUp,
  Package
} from 'lucide-react';

const caseStudies = {
  'sarisuki': {
    name: 'SariSuki',
    industry: 'Retail / Distribution',
    product: 'Supply Chain Financing',
    productLink: '/supply-chain-financing',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    headline: 'How SariSuki powered their merchant network with fair financing',
    founder: {
      name: 'Brian Cu',
      title: 'Co-Founder',
      quote: 'Onboarding with Jia was seamless. They provide our merchant network fair financing which has boosted our growth and our revenues.'
    },
    problem: {
      title: 'The Inventory Gap',
      body: 'SariSuki\'s community leaders (Ka-Suki) often faced a common hurdle: the desire to stock more products for their community was there, but the upfront capital was not. Traditional banks were slow and required collateral that many small merchants simply didn\'t have. This "timing gap" between demand and purchasing power was throttling the network\'s potential.'
    },
    solution: {
      product: 'Supply Chain Financing',
      amount: '₱25,000,000+',
      term: 'Revolving Line',
      body: 'Jia integrated directly with SariSuki to provide quick, low-barrier financing for merchants. Instead of waiting weeks for a bank loan, Ka-Sukis could unlock credit based on their transaction history. This allowed them to buy more inventory instantly and fulfill more orders in their neighborhoods.'
    },
    outcome: {
      metrics: [
        { label: 'Merchant Order Growth', value: '40%' },
        { label: 'Active Ka-Sukis', value: '15,000+' },
        { label: 'Capital Deployed', value: '₱50M+' }
      ],
      quote: 'We didn\'t just want a lender; we wanted a partner who understood the speed of retail in the Philippines. Jia delivered exactly that.'
    }
  },
  'pc-canlas-builders': {
    name: 'PC Canlas Builders',
    industry: 'Construction',
    product: 'Invoice Factoring',
    productLink: '/invoice-factoring',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f3366d4?q=80&w=2070&auto=format&fit=crop',
    headline: 'How PC Canlas Builders used invoice financing to build with confidence',
    founder: {
      name: 'Eduardo Rivera',
      title: 'CEO',
      quote: 'Jia understood that my profit was trapped in invoices. They didn\'t just give me a loan; they gave me a bridge to my next stage of growth.'
    },
    problem: {
      title: 'Locked Profit in Invoices',
      body: 'In the construction industry, you pay for steel, cement, and labor today, but you might not see the payment from the developer for 60 or 90 days. PC Canlas Builders found themselves in a position where they had more contracts than they had liquid cash to support. They needed a way to unlock the value of their finished work to start the next project.'
    },
    solution: {
      product: 'Invoice Factoring',
      amount: '₱5,000,000',
      term: 'Per Project',
      body: 'PC Canlas submitted several outstanding invoices to Jia. Within 24 hours of verification, Jia advanced 80% of the invoice value. This immediate liquidity allowed them to meet payroll for 100+ workers and secure materials for a new commercial site without taking on long-term debt.'
    },
    outcome: {
      metrics: [
        { label: 'Concurrent Projects', value: '3 Major' },
        { label: 'Payroll Delays', value: '0' },
        { label: 'Growth YoY', value: '2.5x' }
      ],
      quote: 'The ability to turn an invoice into cash in 24 hours changed how we bid for projects. We no longer fear the big contracts.'
    }
  },
  'foodpanda-partner': {
    name: 'LogiLink Logistics',
    industry: 'Logistics',
    product: 'Supply Chain Financing',
    productLink: '/supply-chain-financing',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    headline: 'Optimizing delivery operations through smart inventory bridge financing',
    founder: {
      name: 'Maria Santos',
      title: 'Operations Director',
      quote: 'Managing high-volume fluctuations requires capital that moves at the speed of logistics. Jia filled the gap when traditional banks couldn\'t keep up.'
    },
    problem: {
      title: 'Sudden Scale Requirements',
      body: 'When a major delivery platform increased its volume requirements, LogiLink needed to scale its fleet and fuel reserves immediately. The opportunity was massive, but the capital intensive nature of logistics meant their existing credit lines were maxed out. They had the contract, but not the cash to execute the expansion.'
    },
    solution: {
      product: 'Supply Chain Financing',
      amount: '₱12,000,000',
      term: '90 Days',
      body: 'Jia provided a Supply Chain Financing facility specifically for their equipment and fuel suppliers. By paying the suppliers directly, Jia enabled LogiLink to deploy 50 new vehicles in record time. The repayment was structured to align with the monthly payouts from the delivery platform.'
    },
    outcome: {
      metrics: [
        { label: 'Fleet Expansion', value: '+50 units' },
        { label: 'Delivery Volume', value: '+300%' },
        { label: 'On-time Rate', value: '99.2%' }
      ],
      quote: 'Fast funding is the difference between winning a contract and watching it go to a competitor. Jia gave us the speed we needed.'
    }
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const story = caseStudies[slug as keyof typeof caseStudies];

  if (!story) {
    return <Navigate to="/case-studies" replace />;
  }

  // Get related stories (exclude current)
  const related = Object.entries(caseStudies)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-white border-b border-secondary-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-50/50 to-transparent blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-secondary-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                  {story.industry}
                </span>
                <Link to={story.productLink} className="px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary-100 transition-colors">
                  {story.product}
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary-900 leading-[1.1]">
                {story.headline}
              </h1>

              <div className="relative pt-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary-100 -z-10" />
                <p className="text-2xl md:text-3xl font-serif italic text-secondary-700 leading-relaxed">
                  "{story.founder.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-900 font-black">
                    {story.founder.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">{story.founder.name}</div>
                    <div className="text-xs font-black uppercase tracking-widest text-secondary-400">{story.founder.title}, {story.name}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-white">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover grayscale-[20%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TIMING PROBLEM */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8">
          <div className="w-12 h-1 w-20 bg-primary-600 mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">The gap they faced</h2>
          <div className="prose prose-lg prose-secondary max-w-none">
            <p className="text-lg text-secondary-600 leading-relaxed font-light">
              {story.problem.body}
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW JIA HELPED */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-xl border border-secondary-100 flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/3 space-y-12">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-6">Product Used</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary-50 rounded-2xl flex items-center justify-center text-primary-600">
                      {story.product.includes('Invoice') ? <FileText className="w-6 h-6" /> : <Package className="w-6 h-6" />}
                    </div>
                    <Link to={story.productLink} className="text-xl font-bold text-secondary-900 hover:text-primary-600 transition-colors">
                      {story.product}
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-2">Amount</h3>
                  <div className="text-3xl font-black text-secondary-900">{story.solution.amount}</div>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-2">Term</h3>
                  <div className="text-xl font-bold text-secondary-900">{story.solution.term}</div>
                </div>
             </div>

             <div className="lg:w-2/3 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900">The Solution</h2>
                <p className="text-xl text-secondary-600 leading-relaxed font-light">
                  {story.solution.body}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-secondary-900 px-4 py-2 bg-secondary-50 rounded-full">
                    <Clock className="w-4 h-4 text-primary-600" /> &lt;24 Hour Funding
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-secondary-900 px-4 py-2 bg-secondary-50 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" /> Digital Verification
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE OUTCOME */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900">The Outcome</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {story.outcome.metrics.map((metric, i) => (
              <div key={i} className="p-10 bg-secondary-900 rounded-[3rem] text-center space-y-2 group hover:bg-primary-600 transition-colors">
                <div className="text-5xl font-black text-white">{metric.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-400 group-hover:text-white transition-colors">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-12 bg-secondary-50 rounded-[4rem] border border-secondary-100 relative">
               <Quote className="absolute top-12 left-12 w-20 h-20 text-secondary-200/50 -z-0" />
               <p className="text-2xl font-serif italic text-secondary-900 text-center relative z-10">
                 "{story.outcome.quote}"
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED STORIES */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900">Other Success Stories</h2>
            <Link to="/case-studies" className="text-[10px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-2">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             {related.map(([slug, s]) => (
               <Link key={slug} to={`/case-studies/${slug}`} className="group bg-white p-8 rounded-[3rem] border border-secondary-100 shadow-sm hover:timing-shadow transition-all flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-48 aspect-square rounded-[2rem] overflow-hidden flex-shrink-0">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">{s.industry}</div>
                    <h3 className="text-xl font-bold text-secondary-900 leading-tight group-hover:text-primary-600 transition-colors">{s.name}: {s.headline}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary-900">
                      Read Story <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center gap-12">
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight">Is this your timing problem too?</h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/apply" 
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
                Talk to an expert <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
