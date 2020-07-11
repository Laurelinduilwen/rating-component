import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';
import { connect } from 'react-redux';
import WildLink from '../images/link.jpg';

const Product = ({ reviews }) => {
  const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length;

  return (
    <div className="tile">
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <figure className="image is-2by3">
            <img className="wild-link" src={WildLink} alt="wildLink"></img>
          </figure>
        </article>
      </div>
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification ">
          <h2 className="title is-1">Legend of Zelda - Link Statue</h2>
          <p className="subtitle is-3">Price: 3000$</p>

          <p className="subtitle is-3">Average User Score:</p>
          <ReactRating
            emptySymbol="fa fa-star-o fa-2x "
            fullSymbol="fa fa-star fa-2x "
            fractions={2}
            initialRating={Math.round(average * 1e1) / 1e1}
            readonly
          />
        </article>
        <article className="tile is-child notification ">
          <p className="title is-3">Product Info:</p>
          <p className="subtitle is-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </article>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Product);
