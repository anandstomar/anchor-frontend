import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Anchors } from './components/Anchors';
import { 
  Ingest, Validator, Scheduler, SearchPage, Analytics, 
  Notifications, Settings 
} from './components/MockViews';
import { ChatAssistant } from './components/ChatAssistant';

export default function App() {
  // Global keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchTrigger = document.querySelector('[class*="cursor-pointer"]') as HTMLElement;
        if(searchTrigger) searchTrigger.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="anchors" element={<Anchors />} />
          <Route path="ingest" element={<Ingest />} />
          <Route path="validator" element={<Validator />} />
          <Route path="scheduler" element={<Scheduler />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <ChatAssistant />
    </HashRouter>
  );
}