
import React, { useState } from 'react';
import { getBonusAdvisor } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [pref, setPref] = useState('');
  const [result, setResult] = useState<{recommendation: string, reason: string, type: string} | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!pref.trim()) return;
    setLoading(true);
    const advice = await getBonusAdvisor(pref);
    setResult(advice);
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest">
          AI Power Assist
        </div>
        <h2 className="text-3xl font-black text-white mb-6 tracking-tight">¿No sabes qué bono elegir?</h2>
        <p className="text-slate-400 mb-10">Dile a nuestra IA qué te gusta jugar y te daremos la recomendación perfecta.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <input 
            type="text" 
            placeholder="Ej: Me gusta el poker y depósitos bajos..." 
            className="flex-grow rounded-xl bg-[#161616] border border-white/5 px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#13ec5b]/50"
            value={pref}
            onChange={(e) => setPref(e.target.value)}
          />
          <button 
            onClick={handleAsk}
            disabled={loading}
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl transition hover:bg-purple-500 disabled:opacity-50"
          >
            {loading ? 'Pensando...' : 'Preguntar a IA'}
          </button>
        </div>

        {result && (
          <div className="max-w-2xl mx-auto rounded-2xl bg-purple-600/5 border border-purple-500/20 p-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-2">Recomendación IA</h4>
            <div className="text-2xl font-black text-white mb-3">{result.recommendation}</div>
            <p className="text-slate-300 leading-relaxed mb-4">{result.reason}</p>
            <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-lg text-purple-300 text-[10px] font-bold uppercase tracking-widest">
              Categoría: {result.type}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAdvisor;
