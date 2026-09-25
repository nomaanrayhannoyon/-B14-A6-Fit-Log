import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-[#121212] border-b border-zinc-800 text-white px-6">
        
      <div className="navbar-start">

        <a href="/" className="flex items-center gap-2 group">
        
          <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />

          <div className="text-wight px-2 py-1 font- text-sm">
            FITLOG
          </div>
         
        </a>
      </div>

  
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 gap-6 text-sm font-medium">
          <li>

            <a href="/" className="text-[#ccff00] rounded-2xl bg  hover:bg-transparent hover:text-[#ccff00]">
              Workout
            </a>
          </li>
          <li>
            <a href="/my-plan" className="text-zinc-400 hover:bg-transparent hover:text-[#ccff00]">
              My Plan
            </a>
          </li>

        </ul>

      </div>


     
      <div className="navbar-end flex items-center gap-3">

        <a href="/my-plan" className="flex items-center gap-2 bg-[#ccff00] text-black px-3.5 py-1.5 rounded-full text-xs font-bold">
          <span>Plan</span>

          <span className="bg-black text-[#ccff00] w-5 h-5 rounded-full flex items-center justify-center text-[10px]">0</span>
        </a>


        <a href="/my-plan" className="flex items-center gap-2 border border-zinc-700 text-zinc-300 px-3.5 py-1.5 rounded-full text-xs font-bold hover:border-[#ccff00]">
          <span>Saved</span>


          <span className="bg-zinc-800 text-zinc-300 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">0</span>
        </a>

      </div>

    </div>
  )
}

export default Navbar