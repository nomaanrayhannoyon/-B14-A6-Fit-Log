'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [planCount, setPlanCount] = useState(0);

  const [savedCount, setSavedCount] = useState(0);


  useEffect(() => {
    const updateCounts = () => {

      const storedToday = JSON.parse(localStorage.getItem('myFitTodayPlan') || '[]');

      const storedSaved = JSON.parse(localStorage.getItem('myFitSavedPlan') || '[]');
      setPlanCount(storedToday.length);

      setSavedCount(storedSaved.length);
    };

    updateCounts();

    window.addEventListener('storage', updateCounts);
    
  
    const interval = setInterval(updateCounts, 1000);

    return () => {
      window.removeEventListener('storage', updateCounts);

      clearInterval(interval);
    };
  }, []);

  return (
    <div className="navbar bg-[#121212] border-b border-zinc-800 text-white px-6 sticky top-0 z-50">
      
      <div className="navbar-start">

        <Link href="/" className="flex items-center gap-2 group">

          <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />

          <div className="text-white px-2 py-1 font-bold text-sm tracking-wider">
            FITLOG
          </div>

        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="text-[#ccff00] rounded-2xl bg-transparent hover:bg-transparent hover:text-[#ccff00]">
              Workout
            </Link>
          </li>
          <li>
            <Link href="/my-plan" className="text-zinc-400 hover:bg-transparent hover:text-[#ccff00]">
              My Plan
            </Link>

          </li>

        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">

     
        <Link href="/my-plan" className="flex items-center gap-2 bg-[#ccff00] text-black px-3.5 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition">
          <span>Plan</span>

          <span className="bg-black text-[#ccff00] w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
            {planCount}

          </span>
        </Link>

    
        <Link href="/my-plan" className="flex items-center gap-2 border border-zinc-700 text-zinc-300 px-3.5 py-1.5 rounded-full text-xs font-bold hover:border-[#ccff00] transition">
          <span>Saved</span>

          <span className="bg-zinc-800 text-zinc-300 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
            {savedCount}

          </span>
        </Link>
        
      </div>

    </div>
  );
}