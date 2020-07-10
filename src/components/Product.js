import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';
import { connect } from 'react-redux';

const Product = ({ reviews }) => {
  const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length;

  return (
    <section className="App section">
      <h2>Product Name</h2>
      <ReactRating
        emptySymbol="fa fa-star-o fa-2x "
        fullSymbol="fa fa-star fa-2x "
        fractions={2}
        initialRating={Math.round(average * 1e1) / 1e1}
        readonly
      />
      <p>Product Info</p>
    </section>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

Product.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Product);
