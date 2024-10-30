import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function WebsiteInput() {
  const [url, setUrl] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Website Crawler</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            Website URL
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Crawl
            </button>
          </div>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Options</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-indigo-600" />
              <span className="ml-2 text-sm text-gray-600">Follow links</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-indigo-600" />
              <span className="ml-2 text-sm text-gray-600">Include images</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}