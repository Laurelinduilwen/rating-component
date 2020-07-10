import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {!reviews[0] ? (
        <p> There are no reviews for this product</p>
      ) : (
        reviews.map((review) => <Review key={review.id} {...review} />)
      )}
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
