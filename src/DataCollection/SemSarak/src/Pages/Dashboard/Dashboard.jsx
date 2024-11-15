import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import RecentActivity from './RecentActivity';
import Settings from './Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'Recent Activity':
        return <RecentActivity />;
      case 'Settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <main className="flex-1 p-10">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default Dashboard;
