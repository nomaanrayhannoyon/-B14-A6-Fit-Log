import React from 'react'


function Hero() {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 lg:px-16 rounded-3xl mx-4 sm:mx-8 my-6 border border-zinc-800 overflow-hidden">
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        
  
        <div>
        
          <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase bg-[#1e1e1e] px-3 py-1 rounded-md border border-zinc-800">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 uppercase leading-tight">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.

          </h1>

  
          <p className="text-zinc-400 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>


          <div className="mt-8">
            <a
              href="#library"

              className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-bold px-6 py-3 rounded-md text-sm transition-transform hover:scale-105"
            >
              BROWSE WORKOUTS
            </a>
          </div>
        </div>

  
        <div className="flex justify-center">
          <img
            src="/banner.png" 
            alt="Workout Hero"

            className="w-full max-w-md lg:max-w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

