import React from 'react';

export default function CourseStructure() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Course Structure</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            8 Weeks of Intensive Learning
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600">Week 1: Foundation</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• 4 full-day sessions (24 hours)</li>
                <li>• 2 full days of practice (12 hours)</li>
                <li>• Introduction to programming fundamentals</li>
                <li>• Problem-solving methodology</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-600">Weeks 2-8: Deep Dive</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• 6 hours training (one full day)</li>
                <li>• 3 hours guided practice</li>
                <li>• Bi-weekly coding contests</li>
                <li>• Continuous mentorship support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}