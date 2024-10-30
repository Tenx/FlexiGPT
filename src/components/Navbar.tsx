import React from 'react';
import { Settings, LayoutDashboard, Database, Puzzle, Share2, Code } from 'lucide-react';

interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const navItems = [
  { name: 'chatbot', label: 'FlexiGPT', icon: null, isLogo: true },
  { name: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  { name: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
  { name: 'sources', label: 'Sources', icon: <Database className="w-4 h-4" /> },
  { name: 'integrations', label: 'Integrations', icon: <Puzzle className="w-4 h-4" /> },
  { name: 'embed', label: 'Embed on site', icon: <Code className="w-4 h-4" /> },
  { name: 'share', label: 'Share', icon: <Share2 className="w-4 h-4" /> }
];

export default function Navbar({ onPageChange, currentPage }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onPageChange(item.name)}
              className={`flex items-center px-3 py-4 text-sm font-medium ${
                item.isLogo ? 'logo' : 
                currentPage === item.name
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}