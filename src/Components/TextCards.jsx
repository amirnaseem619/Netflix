import React from "react";

const MoreReasonsToJoin = () => {
  const cards = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: "📺", // Example icon, replace with an actual image if needed
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      icon: "⬇️", // Example icon, replace with an actual image if needed
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: "📱", // Example icon, replace with an actual image if needed
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them.",
      icon: "👦👧", // Example icon, replace with an actual image if needed
    },
  ];

  return (
    <div className="flex justify-center bg-black">
    <div className="flex flex-col items-start  p-8 bg-black text-white">
      {/* Title aligned with the first card */}
      <h1 className="text-2xl mb-4 ml-4">More Reasons to Join</h1>
      {/* Cards Container */}
      <div className="flex gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-black rounded-lg p-6 shadow-lg w-60 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
            <div className="text-3xl mt-4">{card.icon}</div> {/* Display icon */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MoreReasonsToJoin;
