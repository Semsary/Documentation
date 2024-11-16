import React from 'react';

const Sidebar = ({ setActiveTab, activeTab }) => {
  const menuItems = ['Overview', 'Recent Activity', 'Settings'];

  return (
    <aside className="w-64 bg-blue-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveTab(item)}
                className={`w-full text-left text-lg hover:bg-blue-700 py-2 px-4 rounded block ${
                  activeTab === item ? 'bg-blue-700' : ''
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
