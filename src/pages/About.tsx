import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Quote, ChevronDown } from 'lucide-react';

import dhruvImg from '../assets/dhruv_founder.jpeg';
import rishikaImg from '../assets/rishika_founder.PNG';
import shradhaImg from '../assets/shradha_founder.jpeg';

const founders = [
  {
    id: 'rishika',
    name: 'Rishika Goel',
    role: 'Co-Founder',
    image: rishikaImg,
    accent: '#00B4D8',
    tagline: 'Because design should be democratic.',
    signature: '"Something used every day should never feel forgettable."',
    intro: 'Rethinking the Everyday',
    short:
      'Rishika traces the idea back to her time studying Luxury Brand Management in Dubai — a world where precision and intentionality define every product. She began to question why that level of thought was reserved only for certain categories.',
    full: `Immersed in an environment where precision, design, and intentionality define every product, she began to question a simple idea: why is this level of thought reserved only for certain categories?

"In luxury, nothing is accidental. Every detail is designed to be felt," she says. "It made me wonder — why don't we apply the same thinking to the things we consume the most?"

One of those things was water.

What began as a routine — crates of bottled water arriving at home — soon turned into observation. Differences in taste, source, and presentation became more apparent. Some felt lighter, others carried distinct mineral profiles. A few were thoughtfully designed; most were purely functional.

It led to a realization that would eventually shape Bluva: the most consumed product in the world is also one of the least consciously experienced.

Goel's background in luxury plays a defining role in shaping this philosophy, but the brand itself is not rooted in exclusivity. Instead, it challenges the idea that only premium categories deserve attention to detail.

Bluva exists to turn the most consumed product in the world into the most consciously experienced one.`,
  },
  {
    id: 'shradha',
    name: 'Shradha',
    role: 'Co-Founder',
    image: shradhaImg,
    accent: '#0077B6',
    tagline: 'Because water has always been more than water.',
    signature: '"Water isn\'t just something you consume — it\'s something you experience."',
    intro: 'A Lifelong Relationship',
    short:
      'For Shradha, water was never just a necessity. Being a water sign, she felt drawn to it from an early age — and over time, that connection evolved into something far more meaningful: a source of calm, clarity, and emotional grounding.',
    full: `Water has never been just a necessity for me — it has always been deeply personal. Being a water sign, I've naturally felt drawn to it, but over time, that connection evolved into something far more meaningful. Water became my source of calm, clarity, and emotional grounding.

Growing up, I instinctively turned to water whenever I felt overwhelmed. Whether it was sitting by a lake, walking along a shoreline, or simply being near a flowing body of water, it had a unique way of quieting the noise around me and within me. It brought a sense of balance that nothing else quite could.

That relationship stayed with me through the years. Even during my time at university in London, I found myself returning to the canal side — sometimes with a heavy mind, sometimes just seeking stillness. Those walks became a ritual. A reset.

Water consistently gave me what I needed: perspective, peace, and clarity.

Bluva was born from that very connection. As co-founders, we didn't just want to create another bottled water brand — we wanted to build something that carries the same sense of purity, calm, and trust that water has always given me.

For me, Bluva is not just a business. It's a reflection of a lifelong relationship with water, translated into a brand that people can trust, connect with, and carry into their everyday lives.`,
  },
  {
    id: 'dhruv',
    name: 'Dhruv',
    role: 'Co-Founder',
    image: dhruvImg,
    accent: '#023E8A',
    tagline: 'Because ordinary doesn\'t have to be forgettable.',
    signature: '"I didn\'t just start a company. I escaped becoming something I didn\'t want to be."',
    intro: 'Against the Safe Choice',
    short:
      'Dhruv didn\'t start Bluva because he was passionate about water. He started because he was told to do something safe — and that word irritated him more than it should have.',
    full: `I didn't start Bluva because I was passionate about water.

I started because I was told to do something safe.

That word irritated me more than it should have. Safe meant I wouldn't fail — but it also meant I wouldn't matter. It meant I'd build something that works… but doesn't stay.

One day I picked up a random water bottle and tried to remember what brand it was.

I couldn't.

That was weird. Because I had just paid for it. I had just consumed it. And still it meant nothing to me.

How can something so essential be so forgettable?

I started noticing it everywhere after that. People don't choose water. They just pick it. No thought. No connection. No identity. It's the most used product in the world… and the least remembered.

I didn't have a grand vision. I just had this one thought looping in my head — what if something this ordinary didn't feel ordinary anymore?

Bluva didn't start with a plan. It started with me trying to fix that feeling. Not by making water "better." But by making it felt.

The first time someone chose Bluva again — not because it was cheaper, not because it was the only option, but because they wanted it — that changed everything.

Bluva is still simple. It's just water. But for me, it's a reminder that even if your starting point is random, forced, or "safe"… you can still turn it into something that feels like you. You just have to care a little more than everyone else.`,
  },
];

// ─── Paragraph Renderer ──────────────────────────────────────────────────────

const StoryParagraphs = ({ text }: { text: string }) =>
  text.split('\n\n').map((para, i) => (
    <p key={i} className="text-slate-600 leading-relaxed text-[17px] mb-5 last:mb-0">
      {para}
    </p>
  ));

// ─── Founder Card ────────────────────────────────────────────────────────────

const FounderCard = ({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-start`}
    >
      {/* Photo Column */}
      <div className="w-full lg:w-[42%] flex-shrink-0">
        <div className="relative group">
          {/* Glow blob */}
          <div
            className="absolute -inset-6 rounded-3xl blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700"
            style={{ backgroundColor: founder.accent }}
          />

          {/* Photo frame */}
          <div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card flex items-end"
            style={{ borderColor: `${founder.accent}22` }}
          >
            {/* Render actual photo or placeholder */}
            {founder.image ? (
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${founder.accent}10, ${founder.accent}30)` }}
              >
                <span
                  className="text-[7rem] font-editorial font-bold leading-none select-none"
                  style={{ color: `${founder.accent}25` }}
                >
                  {founder.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
            )}

            {/* Bottom name strip */}
            <div className="relative z-10 w-full p-6 pt-20 bg-gradient-to-t from-white via-white/90 to-transparent">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1"
                style={{ color: founder.accent }}
              >
                {founder.role}
              </p>
              <h3 className="text-2xl font-editorial font-bold text-slate-900">{founder.name}</h3>
            </div>
          </div>

          {/* Accent line */}
          <div
            className="mt-6 h-[2px] rounded-full w-16"
            style={{ backgroundColor: founder.accent }}
          />
        </div>
      </div>

      {/* Story Column */}
      <div className="w-full lg:w-[58%] space-y-6 lg:pt-8">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3"
        >
          <div className="h-px w-8" style={{ backgroundColor: founder.accent }} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: founder.accent }}
          >
            {founder.intro}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-5xl font-editorial leading-tight text-slate-900"
        >
          {founder.tagline}
        </motion.h3>

        {/* Signature quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative pl-6 py-2"
          style={{ borderLeft: `3px solid ${founder.accent}` }}
        >
          <Quote
            size={28}
            className="absolute -left-3 -top-1 opacity-20"
            style={{ color: founder.accent }}
          />
          <p className="text-xl font-editorial italic text-slate-600 leading-relaxed">
            {founder.signature}
          </p>
        </motion.div>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-600 leading-relaxed text-[17px]"
        >
          {founder.short}
        </motion.p>

        {/* Expandable full story */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-100">
                <StoryParagraphs text={founder.full} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read more toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="group flex items-center gap-3 mt-2 transition-all duration-300 cursor-pointer"
          style={{ color: founder.accent }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
            {expanded ? 'Read Less' : 'Read Full Story'}
          </span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="pt-24 pb-20">

      {/* ── Hero Header ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000"
            alt="Nature/Water header"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00B4D8] mb-4">
            Est. 2024
          </p>
          <h1 className="text-6xl md:text-8xl font-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-xl mx-auto font-editorial italic">
            Three founders. One obsession. The most consumed thing in the world.
          </p>
        </motion.div>
      </section>

      {/* ── Brand Philosophy ── */}
      <section className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block p-1 px-3 rounded bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-widest">
              The Idea
            </div>
            <h2 className="text-5xl md:text-6xl leading-tight font-editorial">
              Born from a vision.<br />
              Refined by <span className="text-brand-blue italic">purpose.</span>
            </h2>
            <div className="relative pl-8 border-l-2 border-brand-blue/30 py-4">
              <Quote className="absolute -left-4 top-0 text-brand-blue/20" size={40} />
              <p className="text-2xl font-editorial italic text-slate-700 leading-relaxed">
                "The most consumed product in the world is also one of the least consciously experienced."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed pt-10"
          >
            <p>
              Bluva was founded by three young entrepreneurs who saw a gap in the market for premium packaged water that resonates with the conscious consumer. We believe hydration is a fundamental right, and safety is a standard that should never be compromised.
            </p>
            <p>
              From the very beginning, the founders recognised that Bluva's ambition extended beyond water. The brand is being built as a broader beverage platform — one that explores different forms of hydration while maintaining a consistent focus on intentionality, quality, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-white shadow-sm relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -10 }} className="glass-card p-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                <Target className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-3xl font-editorial">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed">
                To deliver safe, high-quality, and refreshing hydration products while fostering a culture of health and sustainability in every community we serve.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="glass-card p-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                <Eye className="text-accent-cyan" size={32} />
              </div>
              <h3 className="text-3xl font-editorial">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed">
                To become the most trusted beverage brand in India, recognised for our commitment to purity, innovation, and conscious living.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three Reasons Opener ── */}
      <section className="py-28 container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-blue mb-4">
            The Founders
          </p>
          <h2 className="text-5xl md:text-7xl font-editorial italic text-slate-900">
            Meet the Visionaries
          </h2>
          <div className="w-24 h-[2px] bg-brand-blue mx-auto rounded-full mt-6" />
          <p className="text-slate-500 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Three people. Three very different reasons to build Bluva. One shared belief that the ordinary can be made extraordinary.
          </p>
        </motion.div>

        {/* Three Reasons Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {founders.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 space-y-4 cursor-default"
              style={{ borderTop: `3px solid ${f.accent}` }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: f.accent }}>
                Why Bluva?
              </p>
              <h4 className="text-2xl font-editorial font-bold text-slate-900">{f.name}</h4>
              <p className="text-lg font-editorial italic text-slate-600 leading-relaxed">
                {f.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founders Full Stories */}
        <div className="space-y-36">
          {founders.map((founder, idx) => (
            <FounderCard key={founder.id} founder={founder} index={idx} />
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-editorial font-bold uppercase tracking-widest text-slate-900">
              Our Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: '2024', title: 'The Inception', desc: 'Three friends unite with a vision to redefine packaged water.' },
              { year: '2024 Q3', title: 'Production Begins', desc: 'First 250ml batch leaves our state-of-the-art facility.' },
              { year: '2025', title: 'Expanding Purity', desc: 'Introduction of Jeera Water and larger pack sizes.' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-12 items-start group"
              >
                <div className="text-4xl font-editorial text-brand-blue font-bold w-32 shrink-0 group-hover:scale-110 transition-transform">
                  {step.year}
                </div>
                <div className="pt-2 border-l border-slate-200 pl-8">
                  <h4 className="text-2xl font-editorial mb-2 text-slate-900">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-brand-blue/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-editorial italic mb-8 text-slate-900">
            Ready to Hydrate?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/products" className="btn-primary">View Products</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full" />
      </section>
    </div>
  );
};

export default About;