import React from 'react';
import { PlayCircle, Clock } from 'lucide-react';

const videos = [
  {
    title: 'Understanding Time Complexity',
    duration: '15:30',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128&ixlib=rb-4.0.3',
    progress: 100,
  },
  {
    title: 'Binary Search Techniques',
    duration: '22:45',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2100&ixlib=rb-4.0.3',
    progress: 60,
  },
  {
    title: 'Dynamic Programming Patterns',
    duration: '28:15',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    progress: 0,
  },
];

export default function VideoLibrary() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recommended Videos</h3>
      
      <div className="grid gap-6">
        {videos.map((video, index) => (
          <div key={index} className="flex gap-4">
            <div className="relative flex-shrink-0">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-48 h-28 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <PlayCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{video.title}</h4>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {video.duration}
              </div>
              <div className="mt-3">
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div
                    className="h-1.5 bg-indigo-600 rounded-full"
                    style={{ width: `${video.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}