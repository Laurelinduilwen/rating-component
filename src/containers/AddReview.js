import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions';
import ReactRating from 'react-rating';

const AddReview = ({ dispatch }) => {
  let name;
  let input;
  const [rating, setRating] = useState(null);
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification ">
        <div className="field">
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
            <label className="label">Name</label>

            <input
              className="input"
              type="text"
              placeholder="Please enter a display name"
              ref={(node) => (name = node)}
              data-testid="add-name-input"
            />
            <label className="label">Your Rating:</label>
            <ReactRating
              emptySymbol="fa fa-star-o fa-2x "
              fullSymbol="fa fa-star fa-2x "
              initialRating={rating}
              onChange={(e) => setRating(e)}
            />

            <label className="label">Review</label>
            <textarea
              className="textarea"
              placeholder="Please enter your review"
              ref={(node) => (input = node)}
              data-testid="add-review-input"
            />
            <button className="button is-link" type="submit">
              Add Review
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default connect()(AddReview);
