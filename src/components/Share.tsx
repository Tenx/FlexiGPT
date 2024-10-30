import React, { useState } from 'react';
import { Copy, Check, Link, Users, Globe, Lock } from 'lucide-react';

type ShareOption = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const shareOptions: ShareOption[] = [
  {
    id: 'public',
    title: 'Public',
    description: 'Anyone with the link can access',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 'restricted',
    title: 'Restricted',
    description: 'Only specified users can access',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'private',
    title: 'Private',
    description: 'Only you can access',
    icon: <Lock className="w-5 h-5" />,
  },
];

export default function Share() {
  const [copied, setCopied] = useState(false);
  const [selectedOption, setSelectedOption] = useState('public');
  const [emails, setEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');

  const shareLink = 'https://flexigpt.ai/chat/abc123';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && emailInput.trim() && emailInput.includes('@')) {
      setEmails([...emails, emailInput.trim()]);
      setEmailInput('');
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter(email => email !== emailToRemove));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Share Chatbot</h1>
        <p className="mt-2 text-sm text-gray-600">
          Configure how you want to share your AI assistant with others
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        {/* Share Link Section */}
        <div className="p-6 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share Link
          </label>
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <Link className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                readOnly
                value={shareLink}
                className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-600"
              />
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Access Options */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Access Control</h3>
          <div className="space-y-2">
            {shareOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer border ${
                  selectedOption === option.id
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="shareOption"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className={`${
                      selectedOption === option.id ? 'text-indigo-600' : 'text-gray-500'
                    }`}>
                      {option.icon}
                    </div>
                    <div className="font-medium text-gray-900">{option.title}</div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Email Input Section - Only shown for restricted access */}
        {selectedOption === 'restricted' && (
          <div className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add People
            </label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={handleAddEmail}
              placeholder="Enter email addresses and press Enter"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {emails.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    <span>{email}</span>
                    <button
                      onClick={() => removeEmail(email)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 