import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index}>&#9733;</span>
  ));

  return <div>{stars}</div>;
};

export default StarRating;