import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
            {/* Placeholder for User/Logo Avatar */}
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Actions Removed */}
        <div className="flex items-center gap-6">
        </div>
      </div>
    </header>
  );
};

export default Header;
