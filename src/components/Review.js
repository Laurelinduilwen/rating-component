import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';

const Review = ({ onClick, completed, text, rating }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <p> Review={text}</p>
    {/* <ReactRating initialRating={rating} readonly /> */}
    <p> Rating={rating}</p>
  </div>
);

Review.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Review;
