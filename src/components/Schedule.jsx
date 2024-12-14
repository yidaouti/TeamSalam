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
    { time: "06-07:30 PM", title: "Cardio, Muay Thai", instructor: "3abid" },
    { time: "10-11:30 PM", title: "Cardio, Muay Thai", instructor: "khalid" },
    { time: "06-07:30 PM", title: "Cardio, Muay Thai", instructor: "3abid" },
    { time: "10-11:30 PM", title: "Cardio, Muay Thai", instructor: "khalid" },
    { time: "06-07:30 PM", title: "Cardio, Muay Thai", instructor: "3abid" },
    { time: "10-11:30 PM", title: "Cardio, Muay Thai", instructor: "khalid" },
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <section id="schedule" className="w-full min-h-screen py-20 bg-white">
      <div className="max-container flex flex-col items-center px-6">
        <p className="text-red-600 relative before:absolute before:w-20 before:h-1 before:bg-red-600 before:top-[50%] before:left-0 pl-24 text-2xl font-semibold before:translate-y-[-50%] max-sm:before:w-16 max-sm:pl-20">
          OUR TIME SCHEDULE
        </p>
        <div className="text-center mt-5 mb-16">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug max-lg:text-4xl max-sm:text-3xl">
            THIS IS OUR TIMING SYSTEM
          </h1>
        </div>
        {/* Day Buttons */}
        <div className="grid grid-cols-7 gap-4 max-w-[1130px] mx-auto max-lg:grid-cols-4 max-sm:grid-cols-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`${
                selectedDay === day
                  ? "bg-red-600 text-white"
                  : "bg-transparent text-gray-800"
              } py-3 px-5 text-xl font-medium rounded-lg border border-gray-300 shadow-sm transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-red-300`}
            >
              {day}
            </button>
          ))}
        </div>
        {/* Session Cards */}
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-[90%] mt-10 mx-auto">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`${
                selectedDay === daysOfWeek[index]
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-800"
              } group   hover:bg-red-500 p-6 text-center h-[250px] rounded-xl shadow-md transition-all duration-300 ease-in-out`}
            >
              <p
                className={`text-lg font-medium ${
                  selectedDay === daysOfWeek[index]
                    ? "bg-white text-black"
                    : "bg-red-100 text-red-600"
                } group-hover:bg-white group-hover:text-black py-2 rounded-md mx-auto max-w-[70%]`}
              >
                {session.time}
              </p>
              <h1 className="mt-6 text-2xl font-semibold group-hover:text-white">
                {session.title}
              </h1>
              <p className="mt-3 text-lg">
                by{" "}
                <span className="font-bold text-gray-600 group-hover:text-white">
                  {session.instructor}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
