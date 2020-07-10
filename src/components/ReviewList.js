import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length;
  console.log(average);

  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewList;
