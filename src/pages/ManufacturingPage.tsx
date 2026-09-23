import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Package2, MapPin, BadgeCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/cropped_logo-removebg-preview.png';

export interface ManufacturingData {
  productName: string;
  productCategory: string;
  manufacturerName: string;
  manufacturerAddress: string;
  fssaiLicNo: string;
  marketedBy: string;
  marketedByAddress: string;
  netQuantity: string;
  storageConditions?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' as const },
  }),
};

const ManufacturingPage = ({ data }: { data: ManufacturingData }) => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    document.title = `${data.productName} — Product Info | BLUVA`;
    return () => { document.head.removeChild(meta); };
  }, [data.productName]);

  return (
    <div className="min-h-screen bg-navy-base">

      {/* ── Top Bar ── */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-lg mx-auto px-5 py-3 flex items-center justify-between">
          <Link to="/" className="block">
            <img src={logoImg} alt="BLUVA" className="h-8 object-contain" />
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
            Product Info
          </span>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-10 space-y-4">

        {/* ── Hero Card ── */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="glass-card overflow-hidden"
        >
          <div className="h-1.5 w-full bg-brand-blue" />
          <div className="px-6 py-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                <Package2 size={22} className="text-brand-blue" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue mb-1">
                  {data.productCategory}
                </p>
                <h1 className="text-2xl font-editorial font-bold text-slate-900 leading-tight">
                  {data.productName}
                </h1>
                <p className="text-sm text-slate-500 mt-1">Net Qty: {data.netQuantity}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── FSSAI Card ── */}
        <motion.div
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="glass-card overflow-hidden"
        >
          <div className="px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck size={16} className="text-brand-blue" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                FSSAI Certified
              </h2>
            </div>
            <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-xl px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-brand-blue mb-1">
                  Licence Number
                </p>
                <p className="text-xl font-bold text-slate-800 font-mono tracking-wider">
                  {data.fssaiLicNo}
                </p>
              </div>
              <ShieldCheck size={34} className="text-brand-blue/40 shrink-0" />
            </div>
            <a
              href="https://foscos.fssai.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-accent-cyan transition-colors font-semibold"
            >
              <ExternalLink size={12} />
              Verify on FSSAI portal
            </a>
          </div>
        </motion.div>

        {/* ── Manufactured By ── */}
        <motion.div
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="glass-card overflow-hidden"
        >
          <div className="px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <Factory size={16} className="text-brand-blue" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Manufactured By
              </h2>
            </div>
            <h3 className="font-editorial text-lg font-bold text-slate-900 leading-snug">
              {data.manufacturerName}
            </h3>
            <div className="flex items-start gap-2 mt-3">
              <MapPin size={14} className="text-brand-blue mt-0.5 shrink-0" />
              <p className="text-sm text-slate-500 leading-relaxed">{data.manufacturerAddress}</p>
            </div>
          </div>
        </motion.div>

        {/* ── Marketed By ── */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="glass-card overflow-hidden"
        >
          <div className="px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={16} className="text-brand-blue" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Marketed By
              </h2>
            </div>
            <h3 className="font-editorial text-lg font-bold text-slate-900 leading-snug">
              {data.marketedBy}
            </h3>
            <div className="flex items-start gap-2 mt-3">
              <MapPin size={14} className="text-brand-blue mt-0.5 shrink-0" />
              <p className="text-sm text-slate-500 leading-relaxed">{data.marketedByAddress}</p>
            </div>
          </div>
        </motion.div>

        {/* ── Storage Conditions (optional) ── */}
        {data.storageConditions && (
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="glass-card overflow-hidden"
          >
            <div className="px-6 py-6">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-3">
                Storage Conditions
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">{data.storageConditions}</p>
            </div>
          </motion.div>
        )}

        {/* ── Explore BLUVA CTA ── */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="section-deep-blue rounded-2xl overflow-hidden mt-6"
        >
          <div className="px-6 py-8 text-center">
            <img src={logoImg} alt="BLUVA" className="h-8 mx-auto mb-4 object-contain brightness-0 invert" />
            <h2 className="text-2xl font-editorial font-bold text-white leading-tight mb-2">
              Crafted with purpose.
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs mx-auto">
              You are drinking quality. Explore the brand behind every drop.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white font-bold text-sm px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: '#023E8A' }}
            >
              Explore BLUVA
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* ── Fine Print ── */}
        <motion.p
          custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="text-center text-[10px] text-slate-400 leading-relaxed pb-6 px-4"
        >
          This page is accessible exclusively via the QR code printed on your BLUVA product.
        </motion.p>

      </div>
    </div>
  );
};

export default ManufacturingPage;
