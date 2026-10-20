import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { VerificationReportModal } from './components/VerificationReportModal';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-paper-dark text-ink-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300">
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenVerificationReport={() => setIsReportOpen(true)}
        />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenVerificationReport={() => setIsReportOpen(true)} />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <VerificationReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}

export default App;
