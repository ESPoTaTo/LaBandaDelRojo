
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#13ec5b] to-emerald-700 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase italic">Casino<span className="text-[#13ec5b]">Bonus</span>ES</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tu guía definitiva y de máxima confianza para el juego online en España. Analizamos el mercado para que tú solo tengas que jugar.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Secciones</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Casinos Online</a></li>
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Apuestas Deportivas</a></li>
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Bonos de Bienvenida</a></li>
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Blog de Estrategias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-[#13ec5b] transition-colors">Juego Responsable</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contacto</h4>
            <p className="text-sm text-slate-500 mb-6">¿Dudas sobre un operador?</p>
            <a href="mailto:info@casinobonuses.es" className="text-[#13ec5b] font-bold text-lg hover:underline underline-offset-8">
              info@casinobonuses.es
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
              Copyright © 2024 CasinoBonusES. Todos los derechos reservados. El juego puede ser adictivo, por favor juega con responsabilidad. Solo para mayores de 18 años.
            </p>
          </div>
          
          <div className="flex items-center gap-10 opacity-30 hover:opacity-100 transition-opacity">
            <div className="text-2xl font-black text-white">18+</div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><circle cx="12" cy="11" r="3"/></svg>
              <span className="text-[8px] font-black uppercase leading-[1.1]">Jugar<br/>Bien.es</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
