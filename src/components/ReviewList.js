import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification ">
        <h3 className="title is-3">User Reviews:</h3>
        {!reviews[0] ? (
          <>
            <p className="subtitle is-5"> No reviews for this product yet</p>
            <p className="subtitle is-5"> Be the first to review</p>
          </>
        ) : (
          reviews.map((review) => <Review key={review.id} {...review} />)
        )}
      </article>
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
