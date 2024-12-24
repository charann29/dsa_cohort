import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WeeklyContent from './components/curriculum/WeeklyContent';
import Schedule from './components/Schedule';
import PlatformIntegration from './components/PlatformIntegration';
import StudentDashboard from './components/lms/StudentDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <Features />
      <WeeklyContent />
      <Schedule />
      <PlatformIntegration />
      <StudentDashboard />
    </div>
  );
}