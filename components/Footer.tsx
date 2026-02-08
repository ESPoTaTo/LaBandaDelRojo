
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
              Copyright © 2024 LaBandaDelRojo. Todos los derechos reservados. El juego puede ser adictivo, por favor juega con responsabilidad. Solo para mayores de 18 años.
            </p>
            <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest leading-relaxed">
              Web Designed & Created by - Angel Antelo
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/logos/18logo.png" alt="+18" className="h-8 w-auto" />
            <img src="/logos/autoprohlogo.png" alt="AutoProhibición" className="h-8 w-auto" />
            <img src="/logos/juegosegurologo.png" alt="Juego Seguro" className="h-8 w-auto" />
            <img src="/logos/jugarbienlogo.png" alt="Jugar Bien" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
