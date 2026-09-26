# 🏋️‍♂️ FitLog — Workout Library & Planner

FitLog is a dark, no-nonsense gym companion built with Next.js. It allows users to browse a comprehensive workout library, view detailed instructions, and manage their daily fitness plans and saved workouts with persistent storage.

---

## 🚀 Technologies Used

* **Next.js** (App Router & Dynamic Routing)
* **React** (Hooks: `useState`, `useEffect`)
* **Tailwind CSS** (Styling & Responsive Design)
* **TypeScript** (Type Safety)
* **Browser LocalStorage** (Data Persistence)

---

## ✨ Key Features

1. **Comprehensive Workout Library:** Displays workouts covering major muscle groups in a responsive 3-column grid layout with category tags, duration, ratings, and calories.
2. **Dynamic Details Page:** Click on any workout card to navigate to its dynamic detail page (`/workout/[id]`) featuring specs, muscle groups, and action buttons.
3. **Interactive Planner & Saved List:** Add workouts to "Today's Plan" or "Saved for later" directly from the library or details page, with real-time badge counters in the navigation bar.
4. **Live Metrics & Dashboard (`/my-plan`):** Tracks total exercises, accumulated workout minutes, and calories burned dynamically based on your active plan.
5. **Data Persistence:** Uses `localStorage` to ensure your today's plan and saved workouts survive page reloads.
6. **Toast Notifications & Actions:** Instant visual feedback (toasts) when adding, removing, or marking workouts as done.
7. **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Getting Started Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>