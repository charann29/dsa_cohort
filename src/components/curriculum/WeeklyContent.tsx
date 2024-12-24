import React from 'react';

const weeklyContent = [
  {
    week: 1,
    title: 'Foundation Week',
    description:
      'Intensive introduction to programming fundamentals and problem-solving methodology',
    hours: '36 hours (24 training + 12 practice)',
    topics: [
      'Course Introduction & Industry Overview',
      'Real-world Applications (Client-Server, APIs)',
      'Problem Solving Methodology',
      'Live Coding Sessions',
      'Programming Constructs',
      'Complexity Analysis',
      'Bit Manipulation',
      'Practice Problems',
    ],
  },
  {
    week: 2,
    title: 'Core Problem Solving',
    description: 'Fundamental algorithms and techniques',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Advanced Binary Search Techniques',
      'Two Pointers Methodology',
      'Sliding Window Applications',
      'Contest #1 Preparation',
    ],
  },
  {
    week: 3,
    title: 'Data Structures Foundation - I',
    description: 'Essential data structures and their applications',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Arrays and Strings Deep Dive',
      'Hashing Techniques',
      'Implementation of STL/Collections',
      'Practice with Real Interview Questions',
    ],
  },
  {
    week: 4,
    title: 'Data Structures Foundation - II',
    description: 'More advanced data structures',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Heaps and Priority Queues',
      'Sets and Multisets',
      'Databases and Key-Value Stores',
      'Problem Solving with Data Structures',
    ],
  },
  {
    week: 5,
    title: 'Advanced Algorithms - I',
    description: 'Complex problem-solving patterns',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Recursion Fundamentals',
      'Backtracking Techniques',
      'Contest #2 Preparation',
      'Pattern Recognition in Problems',
    ],
  },
  {
    week: 6,
    title: 'Advanced Algorithms - II',
    description: 'Advanced algorithmic concepts',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Greedy Algorithms',
      'Union Find & Disjoint Sets',
      'Bit Manipulation Advanced',
      'Mathematical Insights in Algorithms',
    ],
  },
  {
    week: 7,
    title: 'Dynamic Programming - I',
    description: 'DP patterns and optimization',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'DP Fundamentals',
      'Memoization vs Tabulation',
      'Common DP Patterns - I',
      'Practice Problems',
    ],
  },
  {
    week: 8,
    title: 'Dynamic Programming - II',
    description: 'Advanced DP techniques',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Common DP Patterns - II',
      'Optimizing DP Solutions',
      'DP in Graphs & Trees',
      'Contest #3 Preparation',
    ],
  },
  {
    week: 9,
    title: 'Graph Algorithms',
    description: 'Graph theory and algorithms',
    hours: '9 hours (6 training + 3 practice)',
    topics: [
      'Graph Representation & Traversal',
      'Shortest Paths & Spanning Trees',
      'Network Flow & Bipartite Graphs',
      'Specialized Graph Algorithms',
    ],
  },
  {
    week: 10,
    title: 'Interview Preparation',
    description: 'Final preparation for technical interviews',
    hours: '9 hours (3 training + 6 practice)',
    topics: [
      'Mock Coding Interviews',
      'System Design Fundamentals',
      'Behavioral Preparation',
      'Next Steps & Career Guidance',
    ],
  },
];

const colors = [
  'bg-gradient-to-r from-blue-50 to-blue-100',
  'bg-gradient-to-r from-indigo-50 to-indigo-100',
  'bg-gradient-to-r from-sky-50 to-sky-100',
  'bg-gradient-to-r from-purple-50 to-purple-100',
  'bg-gradient-to-r from-pink-50 to-pink-100',
  'bg-gradient-to-r from-emerald-50 to-teal-100',
  'bg-gradient-to-r from-yellow-50 to-amber-100',
  'bg-gradient-to-r from-rose-50 to-rose-100',
  'bg-gradient-to-r from-fuchsia-50 to-fuchsia-100',
  'bg-gradient-to-r from-violet-50 to-violet-100',
];

const TopicCard = ({ topic, color }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${color}`}
  >
    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
    <span className="text-gray-700 font-medium">{topic}</span>
  </div>
);

const WeekCard = ({ week, color }) => (
  <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-6 space-y-6">
    <div className="flex items-center gap-4">
      <div
        className={`flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-xl text-white text-3xl font-bold bg-gradient-to-br from-indigo-600 to-indigo-800`}
      >
        {week.week}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-1 text-gray-800">
          {week.title}
        </h3>
        <p className="text-gray-600">{week.description}</p>
        <div className="flex items-center gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="font-medium">Duration:</span>
            <span>{week.hours}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-medium">Topics:</span>
            <span>{week.topics.length}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {week.topics.map((topic, idx) => (
        <TopicCard key={idx} topic={topic} color={colors[week.week - 1]} />
      ))}
    </div>
  </div>
);

const CurriculumShowcase = () => {
  return (
    <div className="bg-gradient-to-bl from-indigo-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 text-white text-sm font-semibold mb-6">
            For Aspiring Software Engineers
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 10-week journey from programming fundamentals to
            advanced algorithms and interview preparation
          </p>
        </div>

        <div className="space-y-8">
          {weeklyContent.map((week, index) => (
            <WeekCard key={week.week} week={week} color={colors[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumShowcase;
