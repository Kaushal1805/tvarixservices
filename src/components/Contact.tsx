import { motion } from 'motion/react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const phone = String(formData.get('phone') || '');
    const message = String(formData.get('message') || '');

    const subject = `New consultation request from ${name || 'website visitor'}`;
    const body = [
      'New consultation request from Tvarix Services website.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: +91 ${phone}`,
      '',
      'Project Requirements:',
      message
    ].join('\n');

    formData.append('_subject', subject);
    formData.append('_template', 'table');
    setSubmitStatus('Sending consultation request...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/kaushalgangwar91056@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Unable to send request');
      }

      event.currentTarget.reset();
      setSubmitStatus('Request sent to kaushalgangwar91056@gmail.com.');
    } catch {
      setSubmitStatus('Opening your email app with the request details.');
      window.location.href = `mailto:kaushalgangwar91056@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <section className="w-full py-24 px-6 border-t border-white/5 relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Let's build the <span className="text-gradient">future</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Ready to scale your business with modern digital solutions? Reach out today for a free consultation.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:+918433233958" className="block text-slate-400 hover:text-white transition-colors">+91 8433233958</a>
                  <a href="tel:+917500150462" className="block text-slate-400 hover:text-white transition-colors">+91 7500150462</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center flex-shrink-0 text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <a href="mailto:kaushalgangwar91056@gmail.com" className="block text-slate-400 hover:text-white transition-colors">
                    kaushalgangwar91056@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Headquarters</h4>
                  <p className="text-slate-400">Global remote execution.<br/>Based in India.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="mailto:kaushalgangwar91056@gmail.com" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors">
                Email Us
              </a>
              <a href="https://wa.me/918433233958" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full glass-panel text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                <MessageCircle size={18} className="text-green-400" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="glass-panel p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Send a request</h3>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-400">Phone Number</label>
                  <div className="flex">
                     {/* Indian country code selector proxy */}
                    <div className="bg-black/80 border border-white/10 border-r-0 rounded-l-xl px-4 py-3 text-slate-400 flex items-center justify-center select-none font-medium text-sm">
                      +91 (IN)
                    </div>
                    <input type="tel" id="phone" name="phone" required className="w-full bg-black/50 border border-white/10 rounded-r-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="98765 43210" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400">Your Project Requirements</label>
                  <textarea id="message" name="message" rows={4} required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us what you're building..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold tracking-wide hover:opacity-90 transition-opacity mt-2">
                  Book Consultation
                </button>
                {submitStatus && (
                  <p className="text-sm text-slate-400 text-center" role="status">
                    {submitStatus}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
