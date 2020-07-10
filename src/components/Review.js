import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';

const Review = ({ date, name, text, rating }) => (
  <>
    <li>Name={name}</li>
    <li>Created at={date}</li>
    <li> Review={text}</li>
    {/* <ReactRating initialRating={rating} readonly /> */}
    <li> Rating={rating}</li>
  </>
);

Review.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Review;
