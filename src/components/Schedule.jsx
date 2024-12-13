import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("");

  // Function to get current day based on Morocco's time zone
  const getMoroccanDay = () => {
    const options = { weekday: "long", timeZone: "Africa/Casablanca" };
    const date = new Date();
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  useEffect(() => {
    // Set default selected day to the current day in Morocco's time zone
    const defaultDay = getMoroccanDay();
    setSelectedDay(defaultDay);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const sessions = [
    { time: "6am-8am", title: "Kick Boxing", instructor: "Jhos Butler" },
    { time: "6am-8am", title: "Cardio", instructor: "Tejas Bakre" },
    { time: "6am-8am", title: "Chest & Triceps", instructor: "Guru Mann" },
    { time: "6am-8am", title: "Shoulder & Legs", instructor: "Nicholas Van Der" },
    { time: "6am-8am", title: "Triceps & Abs", instructor: "Cameron" },
    { time: "6am-8am", title: "l3saaaa", instructor: "chakcha" },
  ];

  const daysOfWeek = [
     "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"
  ];

  return (
    <section id="schedule" className="w-full min-h-screen py-20 flex justify-center items-center bg-gray-100">
      <div className="max-container padding-hero-y padding-x flex flex-col items-center justify-center text-center">
        <p className="text-red-600 relative before:absolute before:w-20 before:h-1 before:bg-red-600 before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] text-center w-fit m-auto max-sm:before:w-16 max-sm:pl-20">
          OUR TIME SCHEDULE
        </p>
        <div className="max-w-[40%] m-auto text-6xl font-semibold leading-[70px] mt-5 mb-20 max-lg:text-5xl max-lg:leading-[50px] max-sm:text-3xl">
          <h1>SELECT THE PERFECT TIME YOU NEED NOW</h1>
        </div>
        <div className="grid grid-cols-7 max-w-[1130px] m-auto gap-2 max-lg:grid-cols-4 max-sm:grid-cols-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`${
                selectedDay === day ? "bg-red-600 text-white" : "bg-transparent text-black"
              } py-4 px-4 text-2xl font-semibold rounded-lg transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white max-lg:py-3 max-lg:px-2 max-sm:text-lg`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 gap-4 w-[80%] mt-10 max-xl:w-[100%] sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 m-auto duration-300">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`${
                selectedDay === daysOfWeek[index] ? "bg-red-600 text-white" : "bg-white text-black"
              } group hover:bg-red-600 hover:text-white px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px] rounded-lg shadow-lg transition-all duration-300 ease-in-out`}
            >
              <p className="bg-white text-black text-lg group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]">
                {session.time}
              </p>
              <h1 className="text-black mt-5 group-hover:text-white text-3xl">{session.title}</h1>
              <p className="text-black group-hover:text-white text-lg">
                by <span className="text-slate-500 group-hover:text-white">{session.instructor}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
