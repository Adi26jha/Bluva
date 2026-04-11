import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Send,
  ArrowRight,
  Droplets
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "13929ac0-3251-466b-9c2d-59a5851c3e57",
          ...data,
          from_name: "Bluva Website (Contact Form)",
          subject: `New Contact Inquiry: ${data.subject}`
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <div className="pt-24 bg-navy-base">
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-editorial font-bold leading-tight">
                Get In <br />
                <span className="text-brand-blue italic">Touch</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-md leading-relaxed">
                Have a question or feedback? We'd love to hear from you. Reach out through any of our channels.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:border-brand-blue/50 transition-colors">
                  <Phone className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2">Call Us</h4>
                  <div className="space-y-1">
                    <p className="text-lg">+91 9773838578</p>
                    <p className="text-lg">+91 9811727224</p>
                    <p className="text-lg">+91 9899570700</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:border-brand-blue/50 transition-colors">
                  <Mail className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2">Email Us</h4>
                  <p className="text-lg">bluvapackagedwater@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:border-brand-blue/50 transition-colors">
                  <MapPin className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2">Visit Us</h4>
                  <p className="text-lg leading-relaxed">
                    18 Arihant Nagar, West Punjabi Bagh,<br />
                    New Delhi 110026
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-blue/10 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-blue/10 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-12 border-slate-200"
          >
            {isSubmitSuccessful ? (
              <div className="text-center py-20 space-y-6">
                 <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto">
                    <Droplets className="text-brand-blue" size={40} />
                  </div>
                  <h3 className="text-3xl font-editorial">Message Sent!</h3>
                  <p className="text-slate-500">Your inquiry has been successfully transmitted. We will get back to you shortly.</p>
                  <button onClick={() => window.location.reload()} className="btn-outline">Send Again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                  />
                  {errors.name && <p className="text-red-400 text-[10px]">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                    />
                    {errors.phone && <p className="text-red-400 text-[10px]">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400">Email Address</label>
                    <input 
                      {...register("email")}
                      className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-[10px]">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">Subject</label>
                  <select 
                    {...register("subject")}
                    className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 text-slate-600 focus:border-brand-blue outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="General">General Inquiry</option>
                    <option value="B2B">B2B Partnership</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-400 text-[10px]">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400">Your Message</label>
                  <textarea 
                    {...register("message")}
                    rows={5}
                    className="w-full bg-white shadow-sm border border-slate-200 rounded-lg px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                  />
                  {errors.message && <p className="text-red-400 text-[10px]">{errors.message.message}</p>}
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-navy-base border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe 
          title="BLUVA Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.835157451433!2d77.12646397631376!3d28.66467388283582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0395cda20b7b%3A0xc3f146f363c46e8c!2s18%2C%20Arihant%20Nagar%2C%20Punjabi%20Bagh%2C%20New%20Delhi%2C%20Delhi%20110026!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale invert contrast-[0.9] brightness-[0.8]"
          loading="lazy"
        />
        
        {/* Floating Marker Card Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
           <div className="glass-card p-4 flex items-center gap-4 border-brand-blue/30 glow-mesh scale-75 md:scale-100">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                 <MapPin className="text-navy-base" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">Our Headquarters</p>
                <p className="text-[10px] text-slate-500">Arihant Nagar, New Delhi</p>
              </div>
           </div>
        </div>
      </section>

      {/* B2B Shortcut Banner */}
      <section className="bg-brand-blue/10 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl font-editorial">Looking to partner?</h3>
              <p className="text-slate-400">Join our distribution network across India.</p>
           </div>
           <Link to="/b2b" className="btn-primary flex items-center gap-3">
              Use B2B Form
              <ArrowRight size={20} />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
