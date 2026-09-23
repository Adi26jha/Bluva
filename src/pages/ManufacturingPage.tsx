import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Package, MapPin, BadgeCheck } from 'lucide-react';
import logoImg from '../assets/cropped_logo-removebg-preview.png';

export interface ManufacturingData {
  productName: string;
  productCategory: string;
  productSize: string;
  accentColor: string;
  manufacturerName: string;
  manufacturerAddress: string;
  fssaiLicNo: string;
  marketedBy: string;
  marketedByAddress: string;
  netQuantity: string;
  storageConditions?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
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
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-start px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mb-8 text-center"
      >
        <img src={logoImg} alt="BLUVA" className="h-10 mx-auto mb-4 object-contain" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
          Product Verification Card
        </span>
      </motion.div>

      {/* Product Card */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden mb-4">
        <div className="h-2 w-full" style={{ backgroundColor: data.accentColor }} />
        <div className="px-6 py-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${data.accentColor}20` }}>
            <Package size={22} style={{ color: data.accentColor }} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{data.productCategory}</p>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">{data.productName}</h1>
            <p className="text-sm text-slate-500">Net Qty: {data.netQuantity}</p>
          </div>
        </div>
      </motion.div>

      {/* FSSAI */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden mb-4">
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
              <BadgeCheck size={20} className="text-green-600" />
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">FSSAI Certified</h2>
          </div>
          <div className="bg-green-50 rounded-xl px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-green-700 font-bold mb-0.5">Licence Number</p>
              <p className="text-lg font-bold text-slate-800 tracking-wide font-mono">{data.fssaiLicNo}</p>
            </div>
            <ShieldCheck size={32} className="text-green-500 shrink-0" />
          </div>
          <a href="https://foscos.fssai.gov.in/" target="_blank" rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1 text-xs text-green-600 hover:text-green-800 transition-colors font-semibold">
            ↗ Verify on FSSAI portal
          </a>
        </div>
      </motion.div>

      {/* Manufactured By */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden mb-4">
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
              <Factory size={20} className="text-blue-600" />
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Manufactured By</h2>
          </div>
          <p className="font-bold text-slate-800 text-base leading-snug">{data.manufacturerName}</p>
          <div className="flex items-start gap-2 mt-2">
            <MapPin size={14} className="text-slate-400 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-500 leading-relaxed">{data.manufacturerAddress}</p>
          </div>
        </div>
      </motion.div>

      {/* Marketed By */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden mb-4">
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
              <ShieldCheck size={20} className="text-purple-600" />
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Marketed By</h2>
          </div>
          <p className="font-bold text-slate-800 text-base leading-snug">{data.marketedBy}</p>
          <div className="flex items-start gap-2 mt-2">
            <MapPin size={14} className="text-slate-400 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-500 leading-relaxed">{data.marketedByAddress}</p>
          </div>
        </div>
      </motion.div>

      {data.storageConditions && (
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="w-full max-w-md bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden mb-4">
          <div className="px-6 py-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Storage Conditions</h2>
            <p className="text-sm text-slate-500 leading-relaxed">{data.storageConditions}</p>
          </div>
        </motion.div>
      )}

      <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-md text-center mt-6 pb-6">
        <p className="text-xs text-slate-400 leading-relaxed">
          This page is exclusively accessible via the QR code printed on your BLUVA product.
        </p>
        <p className="text-xs font-bold text-slate-500 mt-2 tracking-widest uppercase">
          Let's Hydrate, Let's BLUVA ✦
        </p>
      </motion.div>
    </div>
  );
};

export default ManufacturingPage;
