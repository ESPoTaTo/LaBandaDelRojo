import React from 'react';
import { BONUSES } from '../constants';
import BonusCard from './BonusCard';

const BonusGrid: React.FC = () => {
  return (
    <section className="pb-24 pt-8" id="bonos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BONUSES.map((bonus) => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusGrid;
