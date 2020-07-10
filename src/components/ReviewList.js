import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length;
  console.log(average);

  return (
    <ul>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewList;
