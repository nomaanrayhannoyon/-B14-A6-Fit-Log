'use client';

import React, { use, useState } from 'react';
import { workouts } from "@/app/data/WorkoutData";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

interface PageProps {

  params: Promise<{
    id: string;
  }>;
}

export default function WorkoutDetailsPage({ params }: PageProps) {

  const resolvedParams = use(params);
  const workoutId = parseInt(resolvedParams.id);

  const workout = workouts.find((w) => w.id === workoutId);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!workout) {
    notFound();
  }

  const showToast = (msg: string) => {

    setToastMessage(msg);

    setTimeout(() => {

      setToastMessage(null);

    }, 3000);
  };

  const handleAddToTodayPlan = () => {

    const existingPlan = JSON.parse(localStorage.getItem('myFitTodayPlan') || '[]');

    const isAlreadyAdded = existingPlan.some((item: any) => item.id === workout.id);
    

    if (!isAlreadyAdded) {

      const updatedPlan = [...existingPlan, workout];

      localStorage.setItem('myFitTodayPlan', JSON.stringify(updatedPlan));

      showToast('Successfully added to Today\'s Plan! ');
    } else {
      showToast('Already added to Today\'s Plan! ');
    }
  };


  const handleSaveForLater = () => {

    const existingSaved = JSON.parse(localStorage.getItem('myFitSavedPlan') || '[]');

    const isAlreadySaved = existingSaved.some((item: any) => item.id === workout.id);
    
    if (!isAlreadySaved) {
      const updatedSaved = [...existingSaved, workout];
      
      localStorage.setItem('myFitSavedPlan', JSON.stringify(updatedSaved));
      showToast('Successfully saved for later! ');

    } else {
      showToast('Already in your Saved list! ');
    }
  };

  return (
    <main className="flex-grow max-w-6xl mx-auto px-4 py-8 text-white relative">
    
      {toastMessage && (

        <div className="fixed bottom-6 right-6 z-50 bg-[#ccff00] text-black font-bold px-5 py-3 rounded-xl shadow-2xl transition-all animate-bounce text-sm">
          {toastMessage}

        </div>
      )}

      <div className="mb-6">

        <Link href="/" className="text-sm text-gray-400 hover:text-white">

          &larr; Back to Workouts
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-800">
          <Image

            src={workout.image}
            alt={workout.name}

            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">

            {workout.name}
          </h1>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">

            A comprehensive workout designed to build strength, endurance, and proper form from a stable base.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">

            {workout.muscleGroups.map((group, index) => (
              <span
                key={index}

                className="bg-[#ccff00] text-black font-semibold text-xs px-3 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>


          <div className="bg-neutral-900 rounded-xl p-4 mb-6 border border-neutral-800">

            <div className="flex justify-between py-2 border-b border-neutral-800 text-sm">

              <span className="text-gray-400">Duration</span>


              <span className="font-medium">{workout.duration} min</span>
            </div>

            <div className="flex justify-between py-2 border-b border-neutral-800 text-sm">

              <span className="text-gray-400">Calories</span>

              <span className="font-medium">{workout.caloriesBurned} kcal</span>

            </div>
            <div className="flex justify-between py-2 text-sm">

              <span className="text-gray-400">Rating</span>

              <span className="font-medium">{workout.rating}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button 


              onClick={handleAddToTodayPlan}

              className="bg-[#ccff00] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#b3e600] transition text-sm cursor-pointer"
            >
              Add to today&apos;s plan

            </button>
            
            <button 
              onClick={handleSaveForLater}

              className="bg-neutral-800 text-white font-medium px-6 py-3 rounded-xl hover:bg-neutral-700 transition text-sm border border-neutral-700 cursor-pointer"
            >
              Save for later
            </button>

          </div>

        </div>
      </div>

    </main>
  );
}