// src/Reviews.js
import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Great quality! Very comfortable and fits perfectly.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Good value for the price. The material is a bit thin, but overall satisfied.',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      rating: 4.5,
      comment: 'Stylish and well-made. Shipping was fast too!',
    },
  ]);

  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <div className="review-header">
            <span className="review-name">{review.name}</span>
            <span className="review-rating">⭐ {review.rating}</span>
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
