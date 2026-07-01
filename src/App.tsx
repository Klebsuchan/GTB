/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import Features from './components/Features';
import Steps from './components/Steps';
import WhyUs from './components/WhyUs';
import Security from './components/Security';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-dark font-sans text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white scroll-smooth cursor-default overflow-x-hidden">
      <Navbar />
      <main className="p-4 sm:p-8 md:p-12 space-y-6 lg:space-y-8 max-w-[1440px] mx-auto">
        <Hero />
        <Partners />
        <AboutUs />
        <Features />
        <Steps />
        <WhyUs />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
