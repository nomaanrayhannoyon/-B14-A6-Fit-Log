'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image';

export default function MyPlanPage() {

  const [activeTab, setActiveTab] = useState<'todays' | 'saved'>('todays');

                 const [todaysPlan, setTodaysPlan] = useState<any[]>([]);

        const [savedWorkouts, setSavedWorkouts] = useState<any[]>([]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  
  const [sortBy, setSortBy] = useState<string>('rating');

  useEffect(() => {

          const storedToday = localStorage.getItem('myFitTodayPlan');

    const storedSaved = localStorage.getItem('myFitSavedPlan');
    
        if (storedToday) setTodaysPlan(JSON.parse(storedToday));
    
    if (storedSaved) setSavedWorkouts(JSON.parse(storedSaved));
  }, []);


  const showToast = (msg: string) => {
              setToastMessage(msg);

    setTimeout(() => {
             setToastMessage(null);
    }, 3000);
  };

 
  const handleRemoveFromToday = (id: number) => {
           const updated = todaysPlan.filter((item) => item.id !== id);

           setTodaysPlan(updated);
    localStorage.setItem('myFitTodayPlan', JSON.stringify(updated));

    showToast('Removed from Today\'s Plan! ');

  };

           const handleRemoveFromSaved = (id: number) => {

    const updated = savedWorkouts.filter((item) => item.id !== id);

              setSavedWorkouts(updated);

    localStorage.setItem('myFitSavedPlan', JSON.stringify(updated));

    showToast('Removed from Saved! ');
  };

  const handleMarkAsDone = (id: number) => {

            showToast('Great job! Workout marked as done ');
  };

  const currentList = activeTab === 'todays' ? todaysPlan : savedWorkouts;



  const sortedList = [...currentList].sort((a, b) => {

    if (sortBy === 'duration') {
             return b.duration - a.duration;
      
    } else if (sortBy === 'calories') {
      return b.caloriesBurned - a.caloriesBurned; 
         
        } else if (sortBy === 'rating') {
      return b.rating - a.rating; 
    }
    return 0;
  });

  const totalExercises = currentList.length;

              const totalMinutes = currentList.reduce((acc, curr) => acc + (Number(curr.duration) || 0), 0);

  const totalCalories = currentList.reduce((acc, curr) => acc + (Number(curr.caloriesBurned) || 0), 0);


  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 lg:p-12 relative">

      {toastMessage && (

             <div className="fixed bottom-6 right-6 z-50 bg-[#ccff00] text-black font-bold px-5 py-3 rounded-xl shadow-2xl transition-all animate-bounce text-sm">
          {toastMessage}

        </div>
      )}

      <div className="max-w-6xl mx-auto">
        
   
        <div className="mb-8">

          <h1 className="text-3xl font-extrabold uppercase tracking-wider mb-2">MY PLAN</h1>

          <p className="text-zinc-400 text-sm">

            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-[#18181b] border border-zinc-800 p-6 rounded-2xl">
          <div>
                   <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Exercises</p>

            <p className="text-3xl font-extrabold text-[#ccff00]">{totalExercises}</p>

          </div>

          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Minutes</p>

                      <p className="text-3xl font-extrabold text-white">{totalMinutes}</p>
          </div>

          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Calories</p>

            <p className="text-3xl font-extrabold text-white">{totalCalories}</p>

          </div>

        </div>


  
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          
     
                  <div className="flex items-center gap-3">

            <button
              onClick={() => setActiveTab('todays')}

              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${

                activeTab === 'todays' ? 'bg-[#27272a] text-white border border-zinc-700' : 'text-zinc-400 bg-transparent'
              }`}
            >
              Today's Plan

            </button>

            <button
              onClick={() => setActiveTab('saved')}
   
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${


                activeTab === 'saved' ? 'bg-[#27272a] text-white border border-zinc-700' : 'text-zinc-400 bg-transparent'
              }`}
            >
              Saved

            </button>

          </div>

         
          <div className="flex items-center gap-2 bg-[#18181b] border border-zinc-800 px-4 py-2 rounded-xl">
                    <span className="text-xs text-zinc-400 font-medium">Sort By:</span>
      
            <select
              value={sortBy}

              onChange={(e) => setSortBy(e.target.value)}

              className="bg-transparent text-white text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="rating" className="bg-[#18181b] text-white">Rating</option>


                      <option value="duration" className="bg-[#18181b] text-white">Duration</option>

              <option value="calories" className="bg-[#18181b] text-white">Calories</option>

            </select>

          </div>

        </div>

   
        <div className="border border-dashed border-zinc-800 rounded-2xl p-6 bg-[#18181b]/50">

                      {currentList.length === 0 ? (

            
            <div className="flex flex-col items-center justify-center text-center py-12">


              <h2 className="text-xl font-bold uppercase tracking-wide mb-2 text-white">

                NOTHING HERE YET

              </h2>

                       <p className="text-zinc-400 text-sm mb-6">

                Browse the library and add a lift to get today moving.

              </p>

              <Link

                href="/"

                     className="bg-[#ccff00] text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all text-sm uppercase tracking-wider"
              >
                Go to workouts


              </Link>

            </div>
          ) : (
            
           
                       <div className="space-y-4">

              {sortedList.map((workout) => (

                <div 
                  key={workout.id} 

                  className="bg-[#1e1e1e] p-4 rounded-xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                         <div className="flex items-center gap-4 w-full sm:w-auto">

                    <div className="relative h-16 w-24 rounded-lg overflow-hidden bg-zinc-900 shrink-0">
                      <Image 

                        src={workout.image} 

                        alt={workout.name} 

                        fill 
                        className="object-cover" 
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-base uppercase tracking-wide text-white mb-0.5">{workout.name}</h3>
                                   <p className="text-xs text-zinc-400 mb-1">Standard Workout</p>

                      <div className="flex items-center gap-3 text-xs text-zinc-400">

                        <span>⏱️ {workout.duration} min</span>

                        <span>🔥 {workout.caloriesBurned} kcal</span>

                        <span className="text-[#ccff00] font-semibold"> {workout.rating}</span>
                      </div>

                    </div>

                  </div>

                              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">

                    <Link
                      href={`/workout/${workout.id}`}

                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition border border-zinc-700"
                    >

                      View Details
                    </Link>

                    {activeTab === 'todays' && (
   
                      <button
                        onClick={() => handleMarkAsDone(workout.id)}

                        className="px-4 py-2 rounded-xl text-xs font-bold bg-[#ccff00] text-black hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
                      >
                        ✓ Mark as Done

                      </button>
                    )}

                    <button
                      onClick={() => activeTab === 'todays' ? handleRemoveFromToday(workout.id) : handleRemoveFromSaved(workout.id)}
                                  className="text-zinc-400 hover:text-red-400 bg-zinc-800 hover:bg-zinc-700 w-8 h-8 rounded-xl flex items-center justify-center transition cursor-pointer text-xs font-bold border border-zinc-700"
                      title="Remove workout"

                    >
                      ✕
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}
        </div>

      </div>

    </div>
  );
}