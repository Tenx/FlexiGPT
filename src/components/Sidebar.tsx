import React from 'react';
import { FileText, Type, Globe, MessageSquare, BookOpen } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { id: 'files', name: 'Files', icon: <FileText className="w-5 h-5" /> },
  { id: 'text', name: 'Text', icon: <Type className="w-5 h-5" /> },
  { id: 'website', name: 'Website', icon: <Globe className="w-5 h-5" /> },
  { id: 'qa', name: 'Q&A', icon: <MessageSquare className="w-5 h-5" /> },
  { id: 'notion', name: 'Notion', icon: <BookOpen className="w-5 h-5" /> }
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-50 p-4">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg text-sm font-medium ${
            activeTab === item.id
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-600 hover:bg-white hover:text-gray-900'
          }`}
        >
          <span className="mr-3">{item.icon}</span>
          {item.name}
        </button>
      ))}
    </div>
  );
}