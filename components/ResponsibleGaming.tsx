
import React from 'react';

const ResponsibleGaming: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#080808]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#13ec5b]/5 to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter mb-8 leading-tight">
              Juego Seguro y <span className="text-[#13ec5b]">Responsable</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Solo promocionamos operadores con licencia oficial en España otorgada por la Dirección General de Ordenación del Juego (DGOJ). Tu seguridad es nuestra prioridad número uno.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#161616] border border-white/5 text-[#13ec5b] transition-colors group-hover:border-[#13ec5b]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Licencia DGOJ</h3>
                  <p className="text-slate-500 leading-relaxed">Auditados y regulados estrictamente por el Gobierno de España para garantizar limpieza en el juego.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#161616] border border-white/5 text-[#13ec5b] transition-colors group-hover:border-[#13ec5b]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Pagos Encriptados</h3>
                  <p className="text-slate-500 leading-relaxed">Utilizamos tecnología SSL de nivel bancario para proteger cada una de tus transacciones monetarias.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#161616] border border-white/5 text-[#13ec5b] transition-colors group-hover:border-[#13ec5b]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M12 7v5l3 3" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Soporte 24/7 en Español</h3>
                  <p className="text-slate-500 leading-relaxed">Atención inmediata en tu idioma para resolver incidencias con bonos o depósitos en tiempo récord.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-[#13ec5b]/10 blur-3xl opacity-50"></div>
            <div className="relative rounded-3xl border border-white/5 bg-[#161616]/80 p-10 sm:p-12 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 rounded-full bg-[#0a0a0a] p-6 shadow-inner ring-1 ring-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#13ec5b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 italic">Verificado por Expertos</h3>
                <p className="text-slate-400 mb-10 text-lg">Nuestro equipo de analistas prueba cada plataforma manualmente antes de listarla en nuestra base de datos.</p>

                <div className="w-full h-px bg-white/5 mb-10"></div>

                <div className="grid grid-cols-2 gap-8 w-full justify-items-center">
                  <div className="space-y-1 text-center">
                    <div className="text-3xl font-black text-white">24h</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Pagos</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-3xl font-black text-white">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Legal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGaming;
