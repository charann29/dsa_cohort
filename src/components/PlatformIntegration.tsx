import React from 'react';
import {
  Code2,
  Award,
  Target,
  TrendingUp,
  FileText,
  Briefcase,
  BarChart,
  UserPlus,
} from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    description: 'Master algorithmic problems with increasing difficulty',
    icon: Code2,
    features: [
      'Company-specific questions',
      'Weekly contests',
      'Discussion forums',
    ],
  },
  {
    name: 'CodeForces',
    description: 'Participate in competitive programming contests',
    icon: Award,
    features: ['Regular contests', 'Rating system', 'Problem categories'],
  },
  {
    name: 'HackerRank',
    description: 'Practice core programming concepts',
    icon: Target,
    features: [
      'Skill certification',
      'Interview preparation',
      'Domain practice',
    ],
  },
  {
    name: 'InterviewBit',
    description: 'Prepare for technical interviews',
    icon: TrendingUp,
    features: [
      'Company-wise preparation',
      'Mock interviews',
      'Performance tracking',
    ],
  },
];

export default function PlatformIntegration() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-bold tracking-widest text-indigo-600 uppercase">
            Practice Platforms
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Integrated Learning Experience
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
            >
              <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                <platform.icon className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-bold text-white">
                  {platform.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col justify-between px-8 py-10">
                <div>
                  <p className="text-xl text-gray-900">
                    {platform.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {platform.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <span className="mr-2 mt-1 text-indigo-600 font-bold">
                          •
                        </span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
            Student Success Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <BarChart className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Progress Tracking
                </h4>
                <p className="mt-2 text-lg text-gray-600">
                  We closely monitor your progress on integrated platforms and
                  provide personalized feedback for improvement.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Resume Enhancement
                </h4>
                <p className="mt-2 text-lg text-gray-600">
                  Our experts help you build an impressive resume highlighting
                  your coding skills and achievements.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Off-Campus Opportunities
                </h4>
                <p className="mt-2 text-lg text-gray-600">
                  We share exclusive off-campus job opportunities to help you
                  kickstart your career beyond college placements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Start Your Coding Journey?
          </h3>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Consider me in!
          </a>
        </div>
      </div>
    </div>
  );
}
