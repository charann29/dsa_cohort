import React from 'react';
import {
  Users,
  Calendar,
  Brain,
  Trophy,
  Target,
  BookOpen,
  Award,
  TrendingUp,
  BarChart2,
  Briefcase,
  Play,
  FileText,
  Code,
} from 'lucide-react';

const features = [
  {
    name: 'Intensive Training',
    description:
      '80 hours of instructor-led sessions + 40 hours guided practice',
    icon: Calendar,
  },
  {
    name: 'Elite Batch Size',
    description: 'Limited to 100 students with 2 dedicated mentors per batch',
    icon: Users,
  },
  {
    name: '300+ Problems',
    description: 'Carefully curated problems from top tech companies',
    icon: Brain,
  },
  {
    name: 'Industry Contests',
    description: '4 bi-weekly contests simulating real company OAs',
    icon: Trophy,
  },
  {
    name: 'Student Monitoring',
    description: 'Personalized tracking, analysis & leaderboard',
    icon: BarChart2,
  },
  {
    name: 'Company-wise Questions',
    description: 'Targeted practice from previously asked questions',
    icon: Briefcase,
  },
  {
    name: 'Learning Management',
    description: 'Structured curriculum with video content & sheets',
    icon: Play,
  },
  {
    name: 'Resume & Portfolio',
    description: 'Expert guidance on building impressive profiles',
    icon: FileText,
  },
];

const platforms = [
  {
    name: 'CodeChef',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg',
  },
  {
    name: 'Codeforces',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg',
  },
  {
    name: 'LeetCode',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg',
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-bold tracking-widest text-indigo-600 uppercase">
            Features
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            DSA Training Program
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700 max-w-xl mx-auto">
            Join an elite community of problem solvers and accelerate your
            journey to top tech companies with our comprehensive training and
            support.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <dt>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-xl mx-auto">
                  <feature.icon
                    className="h-8 w-8 text-white transition group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-6 text-xl font-semibold leading-8 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center items-center gap-8">
          <span className="text-xl font-semibold text-gray-500">
            Coding Platforms
          </span>
          <div className="flex gap-8">
            {platforms.map((platform) => (
              <img
                key={platform.name}
                src={platform.logo}
                alt={platform.name}
                className="h-10 transition-transform hover:scale-110 hover:rotate-6"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
