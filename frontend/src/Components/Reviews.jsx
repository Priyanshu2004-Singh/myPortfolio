// src/components/Reviews.jsx
import React from 'react';

// Sample review data call via backend if needed
const reviews = [
  {
    id: 1,
    text: "Priyanshu transformed my ideas into a stunning website. Communication was smooth, deadlines were respected, and the final product exceeded my expectations. Highly recommended for any web or app project!",
    name: "Sarah Mitchell",
    title: "Founder, BrightWave Studio",
    image: "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    text: "I hired Priyanshu for an AI-powered web application and was amazed by the quality of work. The project was delivered on time, and the app is intuitive and sleek. Definitely a top-notch freelancer!",
    name: "David Lee",
    title: "CEO, NextGen Solutions",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
];


const Reviews = () => {
  return (
    <div style={{ backgroundColor: "rgb(32, 32, 32)" }} className="bg-black text-white py-16 px-4 md:px-16 lg:px-32 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Client Testimonials</h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest">What my clients say</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {reviews.map(review => (
          <div key={review.id} className="w-full max-w-sm animate-fade-in delay-200">
            {/* Review Text Box */}
            <div className="relative p-8 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300 leading-relaxed text-sm">
                {review.text}
              </p>
              {/* Arrow */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 w-6 h-6 rotate-45 bg-gray-800"></div>
            </div>
            
            {/* Reviewer Profile */}
            <div className="mt-8 flex flex-col items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-bold">
                {review.name}
              </h3>
              <p className="text-xs text-gray-400">
                {review.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;