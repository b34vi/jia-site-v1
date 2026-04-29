import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Map, 
  Home as HomeIcon, 
  Users, 
  ShieldCheck, 
  Building2,
  Globe,
  Briefcase,
  Clock
} from 'lucide-react';

const founders = [
  {
    name: 'Zach Marks',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Started career providing financing to smallholder farmers in South Sudan. Saw firsthand how capital timing — not business quality — determined who succeeded and who didn\'t. Built Jia to fix that.'
  },
  {
    name: 'Cheng Cheng',
    role: 'CPO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Began career financing community banks in Tanzania. Spent 5+ years at leading consumer finance companies. Came to Jia to build lending that\'s actually fair — transparent rates, flexible terms, real relationships.'
  }
];

const team = [
  { name: 'Krizanne Ty', role: 'Head of Philippines' },
  { name: 'Mark Sy', role: 'Asia Operations' },
  { name: 'Yuting Wang', role: 'Data, Credit & Finance' },
  { name: 'Augustine Kimau', role: 'Engineering' },
  { name: 'Cheng Cheng', role: 'Product' },
  { name: 'Ivan Orone', role: 'Engineering' },
  { name: 'Kenny Kemboi', role: 'Engineering' },
  { name: 'Mark Mwaniki', role: 'Africa Operations' },
  { name: 'Winkle Gavieres', role: 'Operations' },
  { name: 'Zach Marks', role: 'CEO' }
];

export default function About() {
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
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-secondary-900 leading-[1.1]">
              We built Jia because we saw what happens when <br/>
              <span className="font-serif italic font-normal text-primary-600">good businesses can't get cash on time.</span>
            </h1>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-2xl font-light">
              Not a bank. Not a last resort. A partner who understands how businesses actually work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE TIMING PROBLEM (POV) */}
      <section className="py-32 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Banks ask if your <br/>business is broken.</h2>
            <div className="space-y-6 text-lg text-secondary-600 font-light leading-relaxed">
              <p>
                Traditional banks were built for stability. They want collateral, long histories, and steady balance sheets. But your business runs on timing — invoice cycles, supplier deadlines, seasonal orders.
              </p>
              <p>
                We started Jia after spending years in finance and watching creditworthy businesses get turned down because they didn't fit the bank's model — not because their business was weak.
              </p>
              <p className="font-bold text-secondary-900">
                We built something different. Underwriting that looks at your invoices, your buyers, your real cash flow — not just your credit score.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="h-64 bg-white rounded-[3rem] shadow-sm border border-secondary-100 flex items-center justify-center p-8">
                <div className="text-center">
                   <div className="text-4xl font-black text-primary-600 mb-2">0%</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">Collateral Required</div>
                </div>
             </div>
             <div className="h-48 bg-secondary-900 rounded-[3rem] shadow-sm mt-8 flex items-center justify-center p-8">
                <div className="text-center">
                   <Clock className="w-10 h-10 text-primary-400 mx-auto mb-4" />
                   <div className="text-sm font-bold text-white">&lt; 24h Funding</div>
                </div>
             </div>
             <div className="h-48 bg-primary-600 rounded-[3rem] shadow-sm -mt-8 flex items-center justify-center p-8">
                <div className="text-center">
                   <ShieldCheck className="w-10 h-10 text-white mx-auto mb-4" />
                   <div className="text-sm font-bold text-white">SEC Regulated</div>
                </div>
             </div>
             <div className="h-64 bg-white rounded-[3rem] shadow-sm border border-secondary-100 mt-0 flex items-center justify-center p-8">
                <div className="text-center">
                   <Users className="w-10 h-10 text-secondary-900 mx-auto mb-4" />
                   <div className="text-sm font-bold text-secondary-900">SME Partner</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDERS */}
      <section className="py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Our Founders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center md:items-start p-10 bg-secondary-50 rounded-[4rem] border border-secondary-100">
                <div className="w-48 h-64 flex-shrink-0 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-secondary-900">{founder.name}</h3>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mt-1">{founder.role}</div>
                  </div>
                  <p className="text-secondary-600 font-light leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY JIA (name meaning) */}
      <section className="py-32 bg-secondary-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-600/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
           <h2 className="text-xs font-black uppercase tracking-[0.4em] text-secondary-500 mb-12">What's in a name?</h2>
           <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto">
                   <HomeIcon className="w-8 h-8 text-primary-400" />
                </div>
                <div>
                   <div className="text-3xl font-black mb-2 font-serif italic">家 (Jia)</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-4">Chinese</div>
                   <p className="text-sm text-secondary-300 font-light">Home, family — the central financial unit.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto">
                   <Heart className="w-8 h-8 text-primary-400" />
                </div>
                <div>
                   <div className="text-3xl font-black mb-2 font-serif italic">जिया (Jia)</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-4">Hindi</div>
                   <p className="text-sm text-secondary-300 font-light">Heart — financial services with a heart.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto">
                   <Map className="w-8 h-8 text-primary-400" />
                </div>
                <div>
                   <div className="text-3xl font-black mb-2 font-serif italic">Njia</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400 mb-4">Swahili</div>
                   <p className="text-sm text-secondary-300 font-light">Road, path — building a path to independence.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section className="py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl font-bold tracking-tight text-secondary-900">Our Global Team</h2>
             <p className="text-secondary-500 font-light">Building bridges across continents.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center space-y-3 group">
                <div className="aspect-square bg-secondary-50 rounded-3xl mb-4 group-hover:bg-primary-50 transition-colors flex items-center justify-center text-secondary-200">
                  <Users className="w-12 h-12" />
                </div>
                <div className="font-bold text-secondary-900">{member.name}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary-400">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST SIGNALS */}
      <section className="py-32 bg-secondary-50 border-y border-secondary-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
          <div className="text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-secondary-400 mb-12">Regulated & Trusted by</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  <span className="text-xl font-bold tracking-tighter">SEC Philippines</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8" />
                  <span className="text-xl font-bold tracking-tighter">BSP Supervised</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8" />
                  <span className="text-xl font-bold tracking-tighter">Global Finance Partners</span>
                </div>
            </div>
          </div>
          <p className="text-sm text-secondary-400 font-medium italic">
            "Backed by leading global finance and blockchain investors"
          </p>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 bg-secondary-950 text-white text-center relative overflow-hidden font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 blur-[150px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to build your next bridge?</h2>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-12 py-6 bg-white text-secondary-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-secondary-100 transition-all shadow-2xl gap-3"
              >
                Get my offer <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to="/careers" 
                className="inline-flex items-center justify-center px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all gap-3"
              >
                We're hiring <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
