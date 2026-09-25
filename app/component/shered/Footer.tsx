import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-zinc-800 py-6 px-6 lg:px-16">
        
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-2 text-white font-bold tracking-wider uppercase">

          <span className="text-[#ccff00]"> <img src="/logo.png " alt="logo" /></span> FITLOG
        </div>

      
        <div>
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>

      </div>
    </footer>
  );
}