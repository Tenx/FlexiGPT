import React, { useState } from 'react';
import { MessageSquare, Users, Zap, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const stats = [
  { name: 'Total Conversations', value: '1,234', icon: MessageSquare },
  { name: 'Active Users', value: '56', icon: Users },
  { name: 'Avg. Response Time', value: '1.2s', icon: Clock },
  { name: 'API Calls', value: '8,456', icon: Zap },
];

const usageData = [
  { month: 'Jan', conversations: 450, users: 23, apiCalls: 2800 },
  { month: 'Feb', conversations: 620, users: 28, apiCalls: 3400 },
  { month: 'Mar', conversations: 850, users: 34, apiCalls: 4200 },
  { month: 'Apr', conversations: 1020, users: 42, apiCalls: 5100 },
  { month: 'May', conversations: 1234, users: 56, apiCalls: 8456 },
];

export default function Dashboard() {
  const [activeMetric, setActiveMetric] = useState('conversations');
  
  const metrics = [
    { id: 'conversations', label: 'Conversations', color: '#4f46e5' },
    { id: 'users', label: 'Users', color: '#06b6d4' },
    { id: 'apiCalls', label: 'API Calls', color: '#8b5cf6' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="text-sm text-gray-500">{stat.name}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Usage Over Time</h2>
            <div className="flex gap-3">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeMetric === metric.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={usageData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey={activeMetric}
                  stroke={metrics.find(m => m.id === activeMetric)?.color}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">User #{i} started a new conversation</p>
                  <p className="text-xs text-gray-500">{i} minute{i !== 1 ? 's' : ''} ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}