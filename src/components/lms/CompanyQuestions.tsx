import React from 'react';
import {
  Building2,
  CheckCircle2,
  BookOpen,
  Users,
  Clock,
  Award,
} from 'lucide-react';

const companies = [
  {
    name: 'Google',
    questions: [
      { id: 1, title: 'Two Sum', difficulty: 'Easy', solved: true },
      { id: 2, title: 'LRU Cache', difficulty: 'Medium', solved: false },
      { id: 3, title: 'Word Search II', difficulty: 'Hard', solved: false },
    ],
  },
  {
    name: 'Meta',
    questions: [
      { id: 4, title: 'Valid Parentheses', difficulty: 'Easy', solved: true },
      { id: 5, title: 'Clone Graph', difficulty: 'Medium', solved: true },
      {
        id: 6,
        title: 'Merge k Sorted Lists',
        difficulty: 'Hard',
        solved: false,
      },
    ],
  },
];

export default function CompanyQuestions() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Ace Your Technical Interviews
          </h2>
          <p className="text-xl text-gray-600">
            Our course is designed to help you succeed in coding interviews at
            top companies.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Company-wise Practice
          </h3>

          <div className="grid gap-8 sm:grid-cols-2">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-indigo-600" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    {company.name}
                  </h4>
                </div>

                <div className="space-y-4">
                  {company.questions.map((question) => (
                    <div
                      key={question.id}
                      className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {question.title}
                        </p>
                        <span
                          className={`text-sm font-semibold ${
                            question.difficulty === 'Easy'
                              ? 'text-green-600'
                              : question.difficulty === 'Medium'
                              ? 'text-yellow-600'
                              : 'text-red-600'
                          }`}
                        >
                          {question.difficulty}
                        </span>
                      </div>
                      {question.solved && (
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-6">
            Comprehensive Interview Preparation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  In-depth Curriculum
                </h4>
                <p className="mt-2 text-gray-600">
                  Our extensive curriculum covers all essential topics, from
                  data structures and algorithms to system design and
                  problem-solving techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Personalized Mentorship
                </h4>
                <p className="mt-2 text-gray-600">
                  You'll receive one-on-one guidance from industry experts who
                  have cracked interviews at top tech companies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Flexible Learning
                </h4>
                <p className="mt-2 text-gray-600">
                  Our course is designed to fit your schedule, with self-paced
                  learning and live sessions at convenient times.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Career Support
                </h4>
                <p className="mt-2 text-gray-600">
                  We provide resume reviews, mock interviews, and career
                  guidance to help you land your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-2xl text-center">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Ready to Elevate Your Coding Skills?
          </h3>
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition duration-150 ease-in-out"
          >
            Join Our Course Now
          </a>
        </div>
      </div>
    </div>
  );
}
