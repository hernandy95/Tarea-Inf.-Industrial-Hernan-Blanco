/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Navigation, Footer } from './components/Navigation';
import { Hero, Intro, Hardware, ApplicationsGallery, Brands } from './components/Sections';
import { Timeline, Languages, ScanCycle, UseCase, Quiz } from './components/Interactive';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-blue-200">
      <Navigation />
      
      <main>
        <Hero />
        <Intro />
        <Timeline />
        <Hardware />
        <Languages />
        <ScanCycle />
        <ApplicationsGallery />
        <UseCase />
        <Brands />
        <Quiz />
      </main>

      <Footer />
    </div>
  );
}
