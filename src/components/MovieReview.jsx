import React from 'react';

const MovieReview = ({ title, rating, review }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-gray-800 text-white text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm">Rating: {rating}/10</p>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700">{review}</p>
      </div>
    </div>
  );
};

export default MovieReview;
