import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';

const Review = ({ name, text, rating }) => (
  <div>
    <p> Review={text}</p>
    {/* <ReactRating initialRating={rating} readonly /> */}
    <p> Rating={rating}</p>
  </div>
);

Review.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Review;
