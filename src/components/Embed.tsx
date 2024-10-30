import React, { useState } from 'react';
import { Code, Copy, Check, ChevronDown, Send, X, Maximize2, Minimize2 } from 'lucide-react';

const embedOptions = {
  theme: ['light', 'dark', 'auto'],
  position: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
  size: ['compact', 'full'],
};

export default function Embed() {
  const [copied, setCopied] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [settings, setSettings] = useState({
    theme: 'light',
    position: 'bottom-right',
    size: 'compact',
  });

  const embedCode = `<script>
  window.flexiGPTConfig = {
    theme: "${settings.theme}",
    position: "${settings.position}",
    size: "${settings.size}"
  };
</script>
<script 
  async 
  src="https://embed.flexigpt.com/widget.js"
  data-client-id="YOUR_CLIENT_ID"
></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWidgetPosition = () => {
    switch (settings.position) {
      case 'bottom-right':
        return 'right-4 bottom-4';
      case 'bottom-left':
        return 'left-4 bottom-4';
      case 'top-right':
        return 'right-4 top-4';
      case 'top-left':
        return 'left-4 top-4';
      default:
        return 'right-4 bottom-4';
    }
  };

  const WidgetPreview = () => (
    <div className={`absolute ${getWidgetPosition()} z-10`}>
      {isWidgetOpen ? (
        <div 
          className={`bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 ease-in-out ${
            settings.size === 'compact' ? 'w-[320px]' : 'w-[400px]'
          } h-[400px] flex flex-col`}
        >
          {/* Widget Header */}
          <div className={`p-4 flex items-center justify-between ${
            settings.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-indigo-600'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-medium">FlexiGPT Assistant</h3>
            </div>
            <button 
              onClick={() => setIsWidgetOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className={`flex-1 p-4 overflow-y-auto ${
            settings.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-4 h-4 text-indigo-600" />
                </div>
                <div className={`p-3 rounded-lg shadow-sm max-w-[80%] ${
                  settings.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                }`}>
                  <p className="text-sm">
                    Hello! How can I assist you today?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${
            settings.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  settings.theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
                onClick={(e) => e.stopPropagation()}
              />
              <button 
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle send message here
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsWidgetOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          {isWidgetOpen ? (
            <Minimize2 className="w-6 h-6" />
          ) : (
            <Maximize2 className="w-6 h-6" />
          )}
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Embed on Site</h1>
        <p className="mt-2 text-sm text-gray-600">
          Add your AI assistant directly to your website with our embed widget
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Configuration</h2>
          <div className="mt-6 space-y-4">
            {(Object.keys(embedOptions) as Array<keyof typeof embedOptions>).map((option) => (
              <div key={option}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                  {option}
                </label>
                <div className="relative">
                  <select
                    value={settings[option]}
                    onChange={(e) =>
                      setSettings((prev) => ({ ...prev, [option]: e.target.value }))
                    }
                    className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {embedOptions[option].map((value) => (
                      <option key={value} value={value}>
                        {value.split('-').join(' ')}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">Embed Code</h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-3 left-3">
              <Code className="w-5 h-5 text-gray-400" />
            </div>
            <pre className="bg-gray-50 rounded-lg p-4 pl-12 overflow-x-auto text-sm text-gray-800">
              {embedCode}
            </pre>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-b-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Preview</h3>
          <div className={`relative border border-gray-200 rounded-lg h-[480px] ${
            settings.theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <WidgetPreview />
          </div>
        </div>
      </div>
    </div>
  );
}