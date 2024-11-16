import React from 'react';

const Overview = () => {
  const stats = [
    { label: 'Total Users', value: '1,245' },
    { label: 'Active Apartments', value: '312' },
    { label: 'New Reviews', value: '58' },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 shadow-lg rounded-md">
          <h3 className="text-lg font-semibold text-gray-600">{stat.label}</h3>
          <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </section>
  );
};

export default Overview;
