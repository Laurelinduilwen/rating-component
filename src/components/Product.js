import React from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';
import { connect } from 'react-redux';

const Product = ({ reviews }) => {
  const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length;

  return (
    <div className="product">
      <div>HEADER</div>
      <h1>Product Name</h1>
      <ReactRating initialRating={Math.round(average * 1e1) / 1e1} readonly />
      <p>Product Info</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

Product.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Product);
