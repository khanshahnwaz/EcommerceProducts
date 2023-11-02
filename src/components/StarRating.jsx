import React from 'react';

const Rating = ({ rating,count }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0.5) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;&#9734;</span>);
    } else {
      stars.push(<span key={i} className="text-yellow-500">&#9734;</span>);
    }
    
  }
  stars.push(<span className='text-sm my-auto'>{count}</span>)
 
  return <div className="flex justify-center md:text-2xl text-lg lg:ext-3xl  ">{stars}</div>;
};

export default Rating;
