import React from 'react';
import Slider from "react-slick"; // Importing Slider from react-slick

import card1 from '../Images/card1.jfif'; 
import card2 from '../Images/card2.jfif';
import card3 from '../Images/card3.jfif';  
import card4 from '../Images/card4.jfif';  
import card5 from '../Images/card5.jfif';  
import card6 from '../Images/card6.jfif'; 
import card7 from '../Images/card7.jfif';
import card8 from '../Images/card8.jfif';  
import card9 from '../Images/card9.jfif';  
import card10 from '../Images/card10.jfif';  

const videos = [
  { id: 1, title: "ALKI", label: "Recently Added", image: card1 },
  { id: 2, title: "The Union", label: "Recently Added", image: card2 },
  { id: 3, title: "Phir Aayi Haseen Dillruba", label: "Recently Added", image: card3 },
  { id: 4, title: "Dungeons & Dragons", label: "Recently Added", image: card4 },
  { id: 5, title: "Kingsman", label: "Recently Added", image: card5 },
  { id: 6, title: "ALKIi", label: "Recently Added", image: card6 },
  { id: 7, title: "The Union 2", label: "Recently Added", image: card7 },
  { id: 8, title: "Phir Aayi Haseen Dillruba 2", label: "Recently Added", image: card8 },
  { id: 9, title: "Dungeons & Dragons 2", label: "Recently Added", image: card9 },
  { id: 10, title: "Kingsman 2", label: "Recently Added", image: card10 },
];

const VideoCards = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of cards visible at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="p-4 bg-black flex justify-center"> {/* Center the slider container */}
      <div className="w-full max-w-5xl"> {/* Restrict the width of the slider */}
        <Slider {...settings}>
          {videos.map((video) => (
            <div key={video.id} className="p-4"> {/* Add gap between cards */}
              <div className="relative w-52 h-72 transform transition-transform duration-300 hover:scale-105"> {/* Hover effect */}
                <img src={video.image} alt={video.title} className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1 text-white text-xs font-semibold">
                  {video.label}
                </div>
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-1 py-0.5">
                  Top {video.id}
                </div>
                <div className="absolute top-2 right-2 bg-white text-black text-xs rounded-full px-2 py-1 font-bold">
                  {video.id}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoCards;


