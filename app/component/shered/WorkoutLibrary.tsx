import React from 'react';
import { workouts } from '@/app/data/WorkoutData';

export default function WorkoutLibrary() {
  return (
    <section id="library" className="py-16 px-6 lg:px-16 bg-[#121212] text-white">

      <div className="max-w-7xl mx-auto">
        
      
        <div className="mb-10">

          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider">

            THE LIBRARY
          </h2>
          <p className="text-zinc-400 text-sm mt-1">

            Explore workouts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {workouts.map((workout) => (
            
            <div 
              key={workout.id} 
              
              className="bg-[#1e1e1e] border border-zinc-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
            
                <div className="h-48 w-full overflow-hidden bg-zinc-900">
                  <img 

                    src={workout.image} 

                    alt={workout.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

          
                <div className="p-5">
                
                  <div className="flex flex-wrap gap-2 mb-3">

                    {workout.muscleGroups.map((muscle, index) => (
                      <span 
                        key={index} 

                        className="bg-[#ccff00] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                      >
                        {muscle}

                      </span>

                    ))}
                  </div>

              
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-4">

                    {workout.name}
                  </h3>
                </div>
              </div>

        
              <div className="px-5 pb-5">

                <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800 pt-3">
                  <div className="flex items-center gap-1">

                    <span>⏱️ {workout.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#ccff00] font-semibold">

                    <span>⭐ {workout.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">

                    <span>🔥 {workout.caloriesBurned} kcal</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}