
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BonusGrid from './components/BonusGrid';
import ResponsibleGaming from './components/ResponsibleGaming';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <BonusGrid />
        <ResponsibleGaming />
      </main>
    </div>
  );
};

export default App;
