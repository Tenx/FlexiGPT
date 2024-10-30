import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function QAInput() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Q&A Pairs</h2>
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question {i}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your question..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Answer {i}
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={3}
                placeholder="Enter the answer..."
              />
            </div>
            <button className="text-red-600 hover:text-red-700 text-sm flex items-center">
              <Trash2 className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>
        ))}
        
        <button className="flex items-center text-indigo-600 hover:text-indigo-700 text-sm">
          <Plus className="w-4 h-4 mr-1" />
          Add Q&A Pair
        </button>
        
        <div className="pt-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Save Q&A Pairs
          </button>
        </div>
      </div>
    </div>
  );
}