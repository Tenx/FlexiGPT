import React from 'react';
import { Puzzle, MessageSquare, Globe, Code, ArrowRight, Check } from 'lucide-react';

const integrations = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Add AI assistance directly in your Slack channels',
    icon: MessageSquare,
    connected: true,
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Integrate with Discord servers and channels',
    icon: MessageSquare,
    connected: false,
  },
  {
    id: 'api',
    name: 'REST API',
    description: 'Access your AI through our REST API endpoints',
    icon: Code,
    connected: true,
  },
  {
    id: 'webhook',
    name: 'Webhooks',
    description: 'Set up webhooks for automated interactions',
    icon: Globe,
    connected: false,
  },
];

export default function Integrations() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
        <p className="mt-2 text-sm text-gray-600">
          Connect your AI assistant with your favorite tools and platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-500">{integration.description}</p>
                  </div>
                </div>
                {integration.connected ? (
                  <span className="flex items-center gap-1 text-sm text-green-600">
                    <Check className="w-4 h-4" />
                    Connected
                  </span>
                ) : null}
              </div>
              <div className="mt-6">
                <button
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    integration.connected
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {integration.connected ? 'Manage Integration' : 'Connect'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}