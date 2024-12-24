import React from 'react';
import { Clock, Calendar, BookOpen, Code2 } from 'lucide-react';

const weekOneSchedule = [
  {
    day: 'Day 1-2',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Course Introduction',
        topics: ['Course Overview', 'Industry Requirements', 'Learning Path'],
      },
      {
        time: '10:45 - 12:30',
        title: 'Real World Applications',
        topics: ['Client-Server Architecture', 'APIs', 'System Design Basics'],
      },
      {
        time: '13:30 - 15:30',
        title: 'Problem Solving Fundamentals',
        topics: ['Problem Analysis', 'Solution Design', 'Code Implementation'],
      },
      {
        time: '15:45 - 17:00',
        title: 'Practical Session',
        topics: ['Live Coding', 'Problem Solving', 'Code Review'],
      },
    ],
  },
  {
    day: 'Day 3-4',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Programming Constructs',
        topics: ['Control Flow', 'Data Types', 'Functions'],
      },
      {
        time: '10:45 - 12:30',
        title: 'Complexity Analysis',
        topics: ['Time Complexity', 'Space Complexity', 'Big O Notation'],
      },
      {
        time: '13:30 - 15:30',
        title: 'Ad-hoc Problem Solving',
        topics: ['Simulations', 'Brute Force', 'Greedy Algorithms'],
      },
      {
        time: '15:45 - 17:00',
        title: 'Practice Problems',
        topics: ['HackerRank Problems', 'LeetCode Easy', 'Code Review'],
      },
    ],
  },
];

const weeklySchedule = {
  training: [
    {
      time: '09:00 - 10:30',
      title: 'Concept Introduction',
      description: 'New topic introduction and theoretical foundation',
    },
    {
      time: '10:45 - 12:30',
      title: 'Implementation Details',
      description: 'Deep dive into implementation and patterns',
    },
    {
      time: '13:30 - 15:30',
      title: 'Problem Solving',
      description: 'Solving medium to hard problems',
    },
    {
      time: '15:45 - 16:00',
      title: 'Assignments',
      description: 'Weekly assignments and practice problems',
    },
  ],
  practice: [
    {
      time: '14:00 - 15:30',
      title: 'Problem Review',
      description: 'Review of assigned problems and solutions',
    },
    {
      time: '15:45 - 17:00',
      title: 'Guided Practice',
      description: 'Mentored problem-solving session',
    },
  ],
};

export default function Schedule() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-bold tracking-widest text-indigo-600 uppercase">
            Detailed Schedule
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"></p>
          <p className="mt-4 text-xl text-gray-600">
            Our students are assigned a target of solving{' '}
            <span className="text-indigo-600 font-semibold">
              170 basic problems
            </span>{' '}
            during the first 4 sessions : induction program.
          </p>
        </div>

        {/* Week 1 Intensive Schedule */}
        <div className="mt-20">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-10">
            Week 1: Foundation (36 Hours)
          </h3>
          <div className="grid gap-12 lg:grid-cols-2">
            {weekOneSchedule.map((day, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                  <h4 className="text-2xl font-bold text-white">{day.day}</h4>
                </div>
                <div className="px-8 py-10">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="mb-8 last:mb-0">
                      <div className="flex items-center gap-3 text-indigo-600 font-semibold">
                        <Clock className="h-5 w-5" />
                        <span className="text-lg">{session.time}</span>
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mt-2">
                        {session.title}
                      </h5>
                      <ul className="mt-2 space-y-2">
                        {session.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="text-base text-gray-600 flex items-start gap-2"
                          >
                            <BookOpen className="h-5 w-5 flex-shrink-0 mt-1 text-indigo-600" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weeks 2-4 Schedule */}
        <div className="mt-24">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-10">
            Weeks 2-4: Ad-hoc Problem Solving (9 Hours/Week)
          </h3>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-xl p-10 text-white">
              <h4 className="text-2xl font-bold mb-8">
                Training Day (6 Hours)
              </h4>
              {weeklySchedule.training.map((session, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex items-center gap-3 font-semibold">
                    <Clock className="h-5 w-5" />
                    <span className="text-lg">{session.time}</span>
                  </div>
                  <h5 className="text-xl font-bold mt-2">{session.title}</h5>
                  <p className="text-base mt-1">{session.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-xl p-10 text-white">
              <h4 className="text-2xl font-bold mb-8">
                Practice Day (3 Hours)
              </h4>
              {weeklySchedule.practice.map((session, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex items-center gap-3 font-semibold">
                    <Clock className="h-5 w-5" />
                    <span className="text-lg">{session.time}</span>
                  </div>
                  <h5 className="text-xl font-bold mt-2">{session.title}</h5>
                  <p className="text-base mt-1">{session.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
