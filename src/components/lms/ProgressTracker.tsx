import React from 'react';
import { Trophy, Target, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Problems Solved', value: '45/250', icon: Target },
  { label: 'Contest Rating', value: '1420', icon: Trophy },
  { label: 'Daily Streak', value: '7 days', icon: TrendingUp },
];

export default function ProgressTracker() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Progress</h3>
      
      <div className="space-y-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Weekly Progress</h4>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '65%' }} />
        </div>
        <p className="text-sm text-gray-600 mt-2">65% of weekly goal completed</p>
      </div>
    </div>
  );
}