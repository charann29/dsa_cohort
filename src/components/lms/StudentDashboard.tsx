import React from 'react';
import { Trophy, Target, PlayCircle, BookOpen } from 'lucide-react';
import ProgressTracker from './ProgressTracker';
import VideoLibrary from './VideoLibrary';
import CompanyQuestions from './CompanyQuestions';

export default function StudentDashboard() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Student Dashboard</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Track Your Progress
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProgressTracker />
          <div className="lg:col-span-2">
            <VideoLibrary />
          </div>
        </div>
        
        <div className="mt-16">
          <CompanyQuestions />
        </div>
      </div>
    </div>
  );
}