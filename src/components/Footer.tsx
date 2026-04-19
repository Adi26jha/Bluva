import { Link } from 'react-router-dom';
import { Droplets, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/cropped_logo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-navy-base border-t border-slate-200 pt-20 pb-10 relative overflow-hidden">
      {/* Wave Decorative Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] fill-white/5"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="block group w-fit cursor-pointer">
              <div className="h-10 md:h-12 flex items-center justify-start transition-opacity group-hover:opacity-80">
                <img 
                  src={logoImg} 
                  alt="Bluva" 
                  className="w-auto h-full object-contain" 
                />
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Premium packaged drinking water crafted with purity and conscious intent. Let's Hydrate, Let's BLUVA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-brand-blue/20 transition-colors border border-slate-200 group">
                <Instagram size={18} className="group-hover:text-brand-blue transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-brand-blue/20 transition-colors border border-slate-200 group">
                <Facebook size={18} className="group-hover:text-brand-blue transition-colors" />
              </a>
              <a href="mailto:bluvapackagedwater@gmail.com" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-brand-blue/20 transition-colors border border-slate-200 group">
                <Mail size={18} className="group-hover:text-brand-blue transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-slate-900 font-editorial text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Quality', 'B2B', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-brand-blue transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-slate-900 font-editorial text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                <MapPin size={18} className="text-brand-blue shrink-0" />
                <span>18 Arihant Nagar, West Punjabi Bagh, New Delhi 110026</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <span>+91 9811727224</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <span>bluvapackagedwater@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Certs Col */}
          <div>
            <h4 className="text-slate-900 font-editorial text-lg mb-6">Certifications</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center p-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">ISI Certified</span>
              </div>
              <div className="h-16 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center p-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">FSSAI Approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} BLUVA Pure Drinking Water. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-400 hover:text-slate-900 transition-colors text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-slate-900 transition-colors text-xs">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
