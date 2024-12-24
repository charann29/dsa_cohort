import React from 'react';
import { Code2, Trophy, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <Code2 className="h-24 w-24 text-indigo-400" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="h-6 w-6 text-yellow-400" />
            <span className="text-xl text-yellow-400 font-semibold tracking-wide uppercase">
              Elevate Intuit Program : Coding 101
            </span>
            <Star className="h-6 w-6 text-yellow-400" />
          </div>
          {/* Replace the original h1 and surrounding code with: */}
<h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl w-full mb-12">
  Master DSA & Competitive Programming
</h1>
          <div className="flex justify-center gap-12 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400">80+</div>
              <div className="text-lg tracking-wide">Hours of Training</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400">50+</div>
              <div className="text-lg tracking-wide">Practice Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400">5</div>
              <div className="text-lg tracking-wide">Coding Contests</div>
            </div>
          </div>
          <p className="mt-8 text-xl leading-8 text-gray-300 max-w-xl mx-auto">
            An intensive 10-week journey to transform you into an expert problem
            solver with guaranteed placement assistance and exclusive benefits
            for top performers.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-8">
            <a
              href="#curriculum"
              className="rounded-md bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Curriculum
            </a>
            <a
              href="#features"
              className="text-lg font-semibold leading-6 text-gray-200 hover:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-16 p-6 bg-white/10 rounded-2xl backdrop-blur-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-indigo-200">
              Top Performers Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <Trophy className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold">SDE Internship</p>
                  <p className="text-lg text-gray-300">$300 monthly stipend</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold">Mentorship Role</p>
                  <p className="text-lg text-gray-300">For upcoming batches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
