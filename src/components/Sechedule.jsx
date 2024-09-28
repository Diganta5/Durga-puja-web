import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Puja Schedule</h2>
      <div className="space-y-8">
        {['Panchami', 'Sashti', 'Saptami', 'Ashtami', 'Navami', 'Dashami'].map((day, index) => (
          <div key={index} className="border-b-2 pb-4">
            <h3 className="text-xl font-semibold">{day} (Day {index})</h3>
            <p className="text-gray-600">Morning rituals and cultural performances in the evening.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
