import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';

const Review = ({ date, name, text, rating }) => (
  <div className="card">
    <div className="card-content">
      <p className="card-header-title" data-testid="test-name-input">
        {name}
      </p>
      <p>Created at={date}</p>
      <p>Review={text}</p>
      <ReactRating
        emptySymbol="fa fa-star-o fa-2x "
        fullSymbol="fa fa-star fa-2x "
        initialRating={rating}
        readonly
      />
      <p>Rating={rating}</p>
    </div>
  </div>
);

Review.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Review;
