import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions';
import ReactRating from 'react-rating';

const AddReview = ({ dispatch }) => {
  let input;
  const [rating, setRating] = useState(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim() || !rating) {
            return;
          }
          dispatch(addReview(input.value, rating));
          input.value = '';
        }}
      >
        <input ref={(node) => (input = node)} data-testid="add-review-input" />
        <button type="submit">Add Review</button>
        <ReactRating initialRating={3} onChange={(e) => setRating(e)} />
      </form>
    </div>
  );
};

export default connect()(AddReview);
