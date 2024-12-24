import React from 'react';

const levels = [
  {
    title: 'Level 1: Programming Fundamentals',
    topics: [
      'Introduction to Course and Real World Applications',
      'Problem Solving Methodology',
      'Programming Constructs',
      'Complexity Analysis',
      'Bit Manipulation',
    ],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128&ixlib=rb-4.0.3'
  },
  {
    title: 'Level 2: Core Problem Solving',
    topics: [
      'Searching & Sorting Techniques',
      'Recursion & Backtracking',
      'Dynamic Programming',
      'Memoization vs Tabulation',
      'Greedy Algorithms',
    ],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2100&ixlib=rb-4.0.3'
  },
  {
    title: 'Level 3: Advanced Techniques',
    topics: [
      'Advanced Binary Search',
      'Two Pointers',
      'Sliding Window',
      'Prefix Sum',
      'Divide & Conquer',
    ],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
  },
  {
    title: 'Level 4: Data Structures',
    topics: [
      'Linked Lists & LRU Cache',
      'Binary Trees & BST',
      'Monotonic Stack',
      'Graph Algorithms',
      'Advanced Graph Concepts',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
  },
];

export default function Curriculum() {
  return (
    <div id="curriculum" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Curriculum</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Structured Learning Path
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {levels.map((level, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={level.image} alt={level.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{level.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {level.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-600">
                        • {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}