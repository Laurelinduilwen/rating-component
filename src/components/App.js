import React from 'react';
import AddReview from '../containers/AddReview';
import VisibleReviewList from '../containers/VisibleReviewList';
import Product from './Product';
import './app.scss';

const App = () => {
  return (
    <>
      <section className="hero is-small is-danger is-bold">
        <div className="hero-body is-small">
          <div className="container">
            <h1 className="title">Laurelin's Shop</h1>
            <h2 className="subtitle">for your Hylian oddities</h2>
          </div>
        </div>
      </section>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-9">
          <Product />
          <AddReview />
        </div>

        <VisibleReviewList />
      </div>
    </>
  );
};

export default App;
