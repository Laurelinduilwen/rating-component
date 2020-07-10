import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';

const Review = ({ date, name, text, rating }) => (
  <div className="review-component">
    <p>Name={name}</p>
    <p>Created at={date}</p>
    <p> Review={text}</p>
    {/* <ReactRating initialRating={rating} readonly /> */}
    <p> Rating={rating}</p>
  </div>
);

Review.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Review;
