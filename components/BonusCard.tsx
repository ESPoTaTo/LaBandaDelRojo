import React from 'react';
import { Bonus } from '../types';

interface BonusCardProps {
  bonus: Bonus;
}

const BonusCard: React.FC<BonusCardProps> = ({ bonus }) => {
  return (
    <div className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bonus.image}
          alt={bonus.title}
          className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Badge */}
      {bonus.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="flex items-center justify-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
            {bonus.badge}
          </span>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between p-8 text-center">

        {/* Logo Section */}
        <div className="mt-4 flex h-24 w-full items-center justify-center">
          {/* If logo is an image, we use a brightness filter to make it white if needed, or rely on it being white */}
          <img
            src={bonus.logo}
            alt={bonus.provider}
            className={`object-contain drop-shadow-xl transition-transform ${bonus.id === 'pokerstars' ? 'max-h-40 w-auto scale-150' : 'max-h-16 max-w-[80%]'
              }`}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
            {bonus.type === 'sports' ? 'Apuestas Deportivas' : 'Casino Online'}
          </span>
          <h3 className="font-oswald text-4xl font-bold uppercase italic leading-none text-white drop-shadow-md">
            {bonus.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-gray-400 line-clamp-2">
            {bonus.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full">
          <button className="w-full rounded-xl bg-white py-4 text-base font-black uppercase tracking-widest text-black transition-transform hover:scale-105 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            {bonus.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;
