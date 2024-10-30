import React, { useState } from 'react';
import { MessageSquare, Users, Zap, Clock, RefreshCw } from 'lucide-react';

export default function Stats() {
  const [isRetraining, setIsRetraining] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleRetrain = async () => {
    setIsRetraining(true);
    setProgress(0);

    // Simulate retraining progress
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(i);
    }

    setIsRetraining(false);
    setProgress(0);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Sources</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">1 File (1,881 chars)</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm font-medium mb-1">Total detected characters</p>
          <div className="flex items-baseline">
            <p className="text-lg font-semibold">1,881</p>
            <span className="text-sm text-gray-400 ml-2">/ 400,000 limit</span>
          </div>
        </div>
        <div className="pt-2 pb-8 relative">
          <button
            onClick={handleRetrain}
            disabled={isRetraining}
            aria-label={isRetraining ? 'Retraining in progress' : 'Retrain Chatbot'}
            className={`w-full relative py-3 sm:py-2 px-4 rounded-lg transition-colors touch-manipulation ${
              isRetraining 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800 active:bg-gray-900'
            }`}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-2 text-base sm:text-sm">
              <RefreshCw className={`w-5 h-5 sm:w-4 sm:h-4 ${isRetraining ? 'animate-spin' : ''}`} />
              <span>{isRetraining ? 'Retraining...' : 'Retrain Chatbot'}</span>
            </div>
            {isRetraining && (
              <>
                <div 
                  className="absolute bottom-0 left-0 h-1.5 sm:h-1 bg-indigo-600 transition-all duration-500 rounded-b-lg" 
                  style={{ width: `${progress}%` }} 
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div className="absolute -bottom-8 left-0 w-full text-center">
                  <span className="text-sm sm:text-xs text-gray-500">{progress}%</span>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}