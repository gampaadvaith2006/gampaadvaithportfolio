import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  ArrowUpRight,
  Code2,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav border-b border-editorial dark:border-paper-borderDark py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          aria-label="Gampa Advaith home"
        >
          <div className="w-9 h-9 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:scale-105 transition-transform">
            GA
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-ink-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-blue-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-ink-500 dark:text-ink-400">
              AI & ML · Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/70 dark:bg-ink-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-editorial dark:border-paper-borderDark shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-ink-900 dark:bg-white text-white dark:text-ink-900 shadow-sm'
                  : 'text-ink-600 dark:text-gray-300 hover:text-ink-900 dark:hover:text-white hover:bg-cream-200/60 dark:hover:bg-ink-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/10 dark:bg-blue-500/20 text-brand-700 dark:text-blue-300 hover:bg-brand-500/20 dark:hover:bg-blue-500/30 border border-brand-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-ink-600 dark:text-gray-300 hover:text-ink-900 dark:hover:text-white hover:bg-cream-200 dark:hover:bg-ink-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-ink-700 rotate-0 hover:-rotate-45 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-ink-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-ink-800"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-ink-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-ink-700 dark:text-gray-200 hover:bg-cream-200 dark:hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-editorial dark:border-paper-borderDark px-4 pt-3 pb-6 animate-fade-in-down shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-ink-900 dark:bg-white text-white dark:text-ink-900 font-semibold'
                    : 'text-ink-700 dark:text-gray-200 hover:bg-cream-200 dark:hover:bg-ink-800'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-editorial dark:border-paper-borderDark flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download / View Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
