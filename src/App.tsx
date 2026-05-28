/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import AdminPanel from './components/AdminPanel';
import Partnership from './components/Partnership';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const [showAdminPanel, setShowAdminPanel] = useState(() => window.location.hash === '#admin');

  useEffect(() => {
    const handleHashChange = () => {
      setShowAdminPanel(window.location.hash === '#admin');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background ambient glows */}
      <div className="glow-blob bg-blue-600/20 w-[600px] h-[600px] top-[-200px] left-[-200px]" />
      <div className="glow-blob bg-purple-600/20 w-[800px] h-[800px] top-[20%] right-[-300px]" />
      <div className="glow-blob bg-indigo-600/10 w-[600px] h-[600px] bottom-[-200px] left-[10%]" />

      <div className="relative z-10 flex flex-col w-full flex-grow">
        <Navbar />
        <main className="flex-grow w-full flex flex-col items-center justify-start pb-24">
          <Hero />
          <Services />
          <About />
          <Portfolio />
          {showAdminPanel && <AdminPanel />}
          <Partnership />
          <Features />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
