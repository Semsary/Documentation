import React from 'react';

const RecentActivity = () => {
  const activities = [
    { message: 'User Ahmed added a new apartment', time: '2 hours ago' },
    { message: 'User Sarah submitted a review', time: '5 hours ago' },
    { message: 'User Kareem updated apartment details', time: '1 day ago' },
  ];

  return (
    <section className="bg-white shadow-lg rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between text-gray-600">
            <span>{activity.message}</span>
            <span className="text-sm text-gray-400">{activity.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentActivity;
