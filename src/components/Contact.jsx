import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  AlertCircle, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin, Youtube } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Form honest delivery: Trigger standard mailto with prefilled fields
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Advaith,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-editorial dark:border-paper-borderDark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-blue-400 font-mono">
            05 / Direct Communication
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            Let's connect & discuss opportunities.
          </h2>
          <p className="mt-3 text-sm text-ink-600 dark:text-gray-300">
            Open for internships, full-stack development, AI product collaborations, and automation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Links & Social Status */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-paper-cardDark border border-editorial dark:border-paper-borderDark shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-blue-400">
                  Direct Inbox
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Verified Contact
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink-900 dark:text-white break-all">
                {personalInfo.email}
              </h3>
              <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                Direct email for recruiters, technical inquiries, and project collaborations.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-cream-100 dark:bg-ink-800 text-ink-800 dark:text-gray-200 hover:bg-cream-200 transition-colors border border-editorial dark:border-ink-700"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Social & Professional Presence */}
            <div className="p-6 rounded-2xl bg-white dark:bg-paper-cardDark border border-editorial dark:border-paper-borderDark shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-gray-400 font-mono">
                Professional Profiles
              </h3>

              {/* GitHub (Active) */}
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-cream-50 dark:bg-ink-800/40 hover:bg-cream-100 dark:hover:bg-ink-800 transition-colors border border-editorial dark:border-ink-700 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-ink-900 dark:text-white block group-hover:text-brand-600 dark:group-hover:text-blue-400">
                      GitHub
                    </span>
                    <span className="text-[11px] text-ink-500 font-mono">
                      @gampaadvaith2006
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-ink-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* LinkedIn (Honest Disabled Placeholder) */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 dark:bg-ink-900/40 border border-dashed border-gray-200 dark:border-ink-700/60 opacity-75">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-200 dark:bg-ink-800 text-gray-500">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-gray-600 dark:text-gray-400 block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                      Profile link coming soon
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-200/60 dark:bg-ink-800 text-gray-600 dark:text-gray-400">
                  Coming Soon
                </span>
              </div>

              {/* YouTube (Honest Disabled Placeholder) */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 dark:bg-ink-900/40 border border-dashed border-gray-200 dark:border-ink-700/60 opacity-75">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-200 dark:bg-ink-800 text-gray-500">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-gray-600 dark:text-gray-400 block">
                      YouTube
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                      Channel coming soon
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-200/60 dark:bg-ink-800 text-gray-600 dark:text-gray-400">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-paper-cardDark rounded-2xl border border-editorial dark:border-paper-borderDark p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-ink-500 mb-6">
                Fill out the details below. This form directly opens your email client with your message formatted and ready to deliver to Gampa Advaith.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5 animate-fade-in">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Opening your mail client!</span>
                    <p className="mt-0.5">
                      If your default email client didn't open automatically, you can directly email <span className="font-semibold">{personalInfo.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-ink-700 dark:text-gray-300 font-mono mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-cream-50 dark:bg-ink-800/80 border ${
                      errors.name ? 'border-red-400 focus:ring-red-400' : 'border-editorial dark:border-ink-700 focus:ring-brand-500'
                    } text-ink-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-ink-700 dark:text-gray-300 font-mono mb-1.5">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-cream-50 dark:bg-ink-800/80 border ${
                      errors.email ? 'border-red-400 focus:ring-red-400' : 'border-editorial dark:border-ink-700 focus:ring-brand-500'
                    } text-ink-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-ink-700 dark:text-gray-300 font-mono mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-cream-50 dark:bg-ink-800/80 border border-editorial dark:border-ink-700 text-ink-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-ink-700 dark:text-gray-300 font-mono mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-cream-50 dark:bg-ink-800/80 border ${
                      errors.message ? 'border-red-400 focus:ring-red-400' : 'border-editorial dark:border-ink-700 focus:ring-brand-500'
                    } text-ink-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Send Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-ink-900 dark:bg-white text-white dark:text-ink-900 hover:bg-brand-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Gampa Advaith</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
