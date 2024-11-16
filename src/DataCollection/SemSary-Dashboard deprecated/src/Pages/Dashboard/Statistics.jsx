import React from 'react';

const Statistics = () => {
  const stats = [
    { label: "Total Users", value: "1,245" },
    { label: "Active Apartments", value: "312" },
    { label: "New Reviews", value: "58" },
  ];

  return (
    <section className="grid grid-cols-3 gap-6 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold">{stat.label}</h3>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </section>
  );
};

export default Statistics;
