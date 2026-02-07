import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-8 px-4 text-center">
      <div className="mb-6 flex justify-center">
        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">
          +18 | Publicidad | Juega con Responsabilidad
        </span>
      </div>

      <h1 className="mx-auto max-w-4xl text-5xl font-oswald font-bold uppercase leading-tight text-white sm:text-6xl md:text-7xl">
        Casas de Apuestas <br className="hidden sm:block" />
        Recomendadas
      </h1>
    </section>
  );
};

export default Hero;
