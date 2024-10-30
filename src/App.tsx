import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FileUpload from './components/FileUpload';
import Stats from './components/Stats';
import ChatInterface from './components/ChatInterface';
import SettingsPanel from './components/SettingsPanel';
import Dashboard from './components/Dashboard';
import Integrations from './components/Integrations';
import Embed from './components/Embed';
import TextInput from './components/sources/TextInput';
import WebsiteInput from './components/sources/WebsiteInput';
import QAInput from './components/sources/QAInput';
import NotionInput from './components/sources/NotionInput';
import Share from './components/Share';

export function App() {
  const [currentPage, setCurrentPage] = useState('sources');
  const [activeSourceTab, setActiveSourceTab] = useState('files');

  const renderSourceContent = () => {
    switch (activeSourceTab) {
      case 'files':
        return <FileUpload />;
      case 'text':
        return <TextInput />;
      case 'website':
        return <WebsiteInput />;
      case 'qa':
        return <QAInput />;
      case 'notion':
        return <NotionInput />;
      default:
        return null;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'chatbot':
        return <ChatInterface />;
      case 'settings':
        return <SettingsPanel />;
      case 'dashboard':
        return <Dashboard />;
      case 'integrations':
        return <Integrations />;
      case 'embed':
        return <Embed />;
      case 'share':
        return <Share />;
      case 'sources':
        return (
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Sources</h1>
            <div className="flex gap-6">
              <div className="hidden md:block">
                <Sidebar activeTab={activeSourceTab} onTabChange={setActiveSourceTab} />
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm">
                  {renderSourceContent()}
                </div>
              </div>
              <div className="hidden lg:block w-80">
                <Stats />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;