import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions';
import ReactRating from 'react-rating';

const AddReview = ({ dispatch }) => {
  let name;
  let input;
  const [rating, setRating] = useState(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim() || !name.value.trim() || !rating) {
            return;
          }
          dispatch(addReview(name.value, input.value, rating));
          name.value = '';
          input.value = '';
        }}
      >
        <input ref={(node) => (name = node)} data-testid="add-name-input" />
        <input ref={(node) => (input = node)} data-testid="add-review-input" />
        <button type="submit">Add Review</button>
        <ReactRating initialRating={rating} onChange={(e) => setRating(e)} />
      </form>
    </div>
  );
};

export default connect()(AddReview);
