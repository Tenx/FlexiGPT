import React from 'react';

export default function TextInput() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Text Input</h2>
      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="Paste or type your text here..."
      />
      <div className="mt-4 flex justify-end">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Process Text
        </button>
      </div>
    </div>
  );
}