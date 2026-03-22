import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Truck, 
  BarChart3, 
  CheckCircle,
  Users,
  Send,
  Droplet,
  ShieldCheck,
  Mail,
  Phone
} from 'lucide-react';

const b2bSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  city: z.string().min(2, "City is required"),
  monthlyRequirement: z.string().min(1, "Requirement is required"),
  message: z.string().optional()
});

type B2BFormData = z.infer<typeof b2bSchema>;

const B2B = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<B2BFormData>({
    resolver: zodResolver(b2bSchema)
  });

  const onSubmit = async (data: B2BFormData) => {
    // Simulate API call
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  return (
    <div className="pt-24 bg-navy-base">
      {/* Hero */}
      <section className="container mx-auto px-6 py-32 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-editorial font-bold leading-tight">
            Grow With <br />
            <span className="text-brand-blue italic">BLUVA</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed">
            Partner with India's rising premium water brand. We offer scalable distribution models and unwavering commitment to quality.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-brand-blue" />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-600">Tiered Pricing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-brand-blue" />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-600">Reliable Supply</span>
            </div>
          </div>
        </motion.div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-brand-blue/20 blur-[120px] rounded-full scale-75" />
          <div className="relative glass-card p-1 items-center justify-center overflow-hidden aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover opacity-60 rounded-xl"
              alt="Warehouse/Distribution"
            />
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-24 bg-white shadow-sm relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Daily Capacity", value: "50,000+", icon: Droplet },
              { label: "Partner Outlets", value: "200+", icon: Building2 },
              { label: "States Covered", value: "5+", icon: Truck },
              { label: "Happy Clients", value: "10,000+", icon: Users }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                  <stat.icon className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-editorial font-bold text-slate-900">{stat.value}</h3>
                <p className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-editorial italic mb-4">Partnership Benefits</h2>
          <p className="text-slate-400">Why distributors choose BLUVA</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Competitive Pricing", 
              desc: "Aggressive margins that allow our partners to scale their businesses effectively while maintaining premium brand positioning.",
              icon: BarChart3
            },
            { 
              title: "Marketing Support", 
              desc: "From POS materials to digital campaigns, we provide the assets you need to drive demand in your region.",
              icon: Send
            },
            { 
              title: "Quality Assurance", 
              desc: "Our rigorous 5-step filtration and regular quality checks ensure zero complaints and maximum consumer trust.",
              icon: ShieldCheck
            },
            { 
              title: "Timely Logistics", 
              desc: "Strategically located manufacturing ensures rapid fulfillment and consistent stock availability.",
              icon: Truck
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="glass-card-dark p-12 border-slate-200 flex gap-8"
            >
              <div className="shrink-0 w-12 h-12 rounded bg-brand-blue/10 flex items-center justify-center">
                <item.icon className="text-brand-blue" size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-editorial">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* B2B Form section */}
      <section className="py-32 relative overflow-hidden" id="b2b-form">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-5xl font-editorial mb-8">Join the <br /><span className="text-brand-blue italic">Elite Network</span></h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Fill out the inquiry form and our B2B specialized team will get back to you within 24 hours to discuss potential synergy.
            </p>
            <div className="space-y-4">
               <div className="flex gap-4 items-center text-slate-600">
                  <Mail size={18} className="text-brand-blue" />
                  <span>partners@bluva.net</span>
               </div>
               <div className="flex gap-4 items-center text-slate-600">
                  <Phone size={18} className="text-brand-blue" />
                  <span>+91 9811727224</span>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 border-slate-200"
            >
              {isSubmitSuccessful ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="text-brand-blue" size={40} />
                  </div>
                  <h3 className="text-3xl font-editorial">Inquiry Received!</h3>
                  <p className="text-slate-500">Thank you for your interest in BLUVA. Our team will contact you shortly.</p>
                  <button onClick={() => window.location.reload()} className="btn-outline">Send Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-400">Company Name</label>
                      <input 
                        {...register("companyName")}
                        className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-blue outline-none transition-colors"
                        placeholder="Your Company Ltd."
                      />
                      {errors.companyName && <p className="text-red-400 text-[10px] italic">{errors.companyName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-400">Contact Person</label>
                      <input 
                        {...register("contactPerson")}
                        className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-blue outline-none transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.contactPerson && <p className="text-red-400 text-[10px] italic">{errors.contactPerson.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-400">Email Address</label>
                      <input 
                        {...register("email")}
                        className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-blue outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-[10px] italic">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-400">Phone Number</label>
                      <input 
                        {...register("phone")}
                        className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-blue outline-none transition-colors"
                        placeholder="+91 9999999999"
                      />
                      {errors.phone && <p className="text-red-400 text-[10px] italic">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-400">City / State</label>
                      <input 
                        {...register("city")}
                        className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-blue outline-none transition-colors"
                        placeholder="New Delhi"
                      />
                      {errors.city && <p className="text-red-400 text-[10px] italic">{errors.city.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-400">Monthly Requirement</label>
                      <select 
                        {...register("monthlyRequirement")}
                        className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-600 focus:border-brand-blue outline-none transition-colors appearance-none"
                      >
                        <option value="">Select quantity</option>
                        <option value="500-1000">500 - 1000 Bottles</option>
                        <option value="1000-5000">1000 - 5000 Bottles</option>
                        <option value="5000+">5000+ Bottles</option>
                      </select>
                      {errors.monthlyRequirement && <p className="text-red-400 text-[10px] italic">{errors.monthlyRequirement.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400">Message (Optional)</label>
                    <textarea 
                      {...register("message")}
                      rows={4}
                      className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-blue outline-none transition-colors"
                      placeholder="How can we help you grow?"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-navy-base border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
