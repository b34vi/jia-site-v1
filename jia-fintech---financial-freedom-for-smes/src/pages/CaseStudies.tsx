import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  FileText, 
  Package, 
  Briefcase,
  Quote
} from 'lucide-react';

const stories = [
  {
    id: 'sarisuki',
    name: 'SariSuki',
    industry: 'Retail / Distribution',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    headline: 'How SariSuki powered their merchant network with fair financing',
    teaser: 'Onboarding with Jia was seamless. They provide our merchant network fair financing which has boosted our growth and our revenues.',
    products: ['Invoice Factoring', 'Supply Chain Financing'],
    slug: 'sarisuki'
  },
  {
    id: 'pc-canlas',
    name: 'PC Canlas Builders',
    industry: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f3366d4?q=80&w=2070&auto=format&fit=crop',
    headline: 'How PC Canlas Builders used invoice financing to build with confidence',
    teaser: 'Bridge the gap between project delivery and client payment — without putting growth on hold.',
    products: ['Invoice Factoring'],
    slug: 'pc-canlas-builders'
  },
  {
    id: 'foodpanda',
    name: 'Foodpanda Partner',
    industry: 'Logistics / F&B',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2070&auto=format&fit=crop',
    headline: 'Optimizing delivery operations through smart inventory bridge financing',
    teaser: 'Managing high-volume fluctuations requires capital that moves at the speed of logistics. Jia filled the gap.',
    products: ['Supply Chain Financing'],
    slug: 'foodpanda-partner'
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-32 overflow-hidden bg-white border-b border-secondary-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
              Real businesses. <br/>
              <span className="font-serif italic font-normal text-primary-600">Real timing problems.</span>
            </h1>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-xl font-light">
              Here's how Philippine SMEs used Jia to close the gap between doing the work and getting paid.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STORY CARDS */}
      <section className="py-32 bg-secondary-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stories.map((story) => (
              <motion.div 
                key={story.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:timing-shadow transition-all border border-secondary-100 flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden group">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-secondary-900 shadow-sm">
                    {story.industry}
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {story.products.map((p, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-[0.15em] text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-900 tracking-tight leading-snug">
                    {story.headline}
                  </h3>
                  
                  <p className="text-sm text-secondary-500 leading-relaxed font-medium line-clamp-3">
                    "{story.teaser}"
                  </p>
                  
                  <div className="pt-6 mt-auto">
                    <Link 
                      to={`/case-studies/${story.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-secondary-900 group"
                    >
                      Read their story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL FEATURE */}
      <section className="py-32 bg-white font-sans border-t border-secondary-100 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
           <div className="lg:w-1/2 space-y-8">
              <Quote className="w-16 h-16 text-primary-100" />
              <h2 className="text-4xl md:text-5xl font-serif italic text-secondary-900 leading-tight">
                "Jia understood that my profit was trapped in invoices. They didn't just give me a loan; they gave me a bridge to my next stage of growth."
              </h2>
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-900 font-bold overflow-hidden border-2 border-white shadow-lg">
                    <Building2 className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-lg font-bold text-secondary-900">Eduardo Rivera</div>
                    <div className="text-xs font-black uppercase tracking-widest text-secondary-400">CEO, PC Canlas Builders</div>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <div className="h-48 bg-secondary-50 rounded-3xl overflow-hidden border border-secondary-100 shadow-sm transform -rotate-3">
                   <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1918&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Philippine construction" />
                 </div>
                 <div className="h-64 bg-primary-600 rounded-3xl flex items-center justify-center text-white p-8">
                    <div className="text-center">
                       <div className="text-4xl font-black mb-2">100%</div>
                       <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Digital Process</div>
                    </div>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="h-64 bg-secondary-900 rounded-3xl overflow-hidden border border-secondary-100 shadow-sm relative">
                    <img src="https://images.unsplash.com/photo-1574632230193-27083a2fb097?q=80&w=1935&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" alt="Philippine logistics" />
                    <div className="absolute inset-x-0 bottom-6 text-center text-white">
                       <div className="text-2xl font-bold">Bridging</div>
                       <div className="text-[10px] font-black uppercase tracking-widest opacity-60">The Timing Gap</div>
                    </div>
                 </div>
                 <div className="h-48 bg-secondary-50 rounded-3xl overflow-hidden border border-secondary-100 shadow-sm transform rotate-3">
                   <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Philippine business owner" />
                 </div>
              </div>
           </div>
         </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white relative overflow-hidden font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight">Is your business next?</h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
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
    </div>
  );
}
