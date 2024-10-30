import React from 'react';
import { BookOpen } from 'lucide-react';

export default function NotionInput() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Notion Integration</h2>
      <div className="text-center py-8">
        <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Connect to Notion</h3>
        <p className="text-sm text-gray-500 mb-6">
          Import your Notion pages and databases to train your AI assistant
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Connect Notion Account
        </button>
      </div>
    </div>
  );
}