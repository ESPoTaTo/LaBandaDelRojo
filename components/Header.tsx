import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
            {/* Logo La Banda Del Rojo */}
            <img
              src="/logos/logo.jpg"
              alt="Logo La Banda Del Rojo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Centered Title */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full pointer-events-none">
          <span className="text-xl md:text-2xl font-black italic uppercase tracking-wider text-white drop-shadow-md">
            La Banda Del Rojo
          </span>
        </div>

        {/* Right Actions Removed */}
        <div className="flex items-center gap-6">
          <a
            href="https://t.me/LBdRojo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center transition-transform hover:scale-110"
          >
            <img
              src="/logos/telegram-logo.webp"
              alt="Telegram La Banda Del Rojo"
              className="h-16 w-16 object-contain drop-shadow-[0_0_10px_rgba(36,161,222,0.3)] transition-transform hover:scale-110"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
