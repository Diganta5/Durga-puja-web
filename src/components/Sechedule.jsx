import React from 'react';

const Schedule = () => {
  const scheduleData = [
    { day: 'Panchami', date: 'October 19', activities: 'Kalparambha and Bodhan rituals in the morning, Evening prayers and Bhog' },
    { day: 'Sashti', date: 'October 20', activities: 'Bel Baran in the morning, Evening cultural programs, Aarti and Dhunuchi Naach' },
    { day: 'Saptami', date: 'October 21', activities: 'Nabapatrika snan, Pushpanjali in the morning, Sandhya Aarti and Musical Night' },
    { day: 'Ashtami', date: 'October 22', activities: 'Kumari Puja and Sandhi Puja in the morning, Traditional Dance and Drama in the evening' },
    { day: 'Navami', date: 'October 23', activities: 'Mahasnan and Navami Puja in the morning, Bhog distribution and Cultural Fest in the evening' },
    { day: 'Dashami', date: 'October 24', activities: 'Sindoor Khela and Vijaya Dashami rituals, Evening farewell ceremony and immersion' },
  ];

  return (
    <section id="schedule" className="py-16 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-slate-700">Durga Puja Schedule 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {scheduleData.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4 rounded-lg shadow-md bg-white py-6 px-8 overflow-hidden">
            <div className="flex justify-between items-center text-lg font-bold capitalize rounded-md text-slate-700">
              {item.day} - {item.date}
              <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700">{item.activities}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;