import React from 'react';
import AddReview from '../containers/AddReview';
import VisibleReviewList from '../containers/VisibleReviewList';
import Product from './Product';

const App = () => {
  return (
    <div>
      <Product />
      <AddReview />
      <VisibleReviewList />
    </div>
  );
};

export default App;
