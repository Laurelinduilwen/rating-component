import React from 'react';
import AddReview from '../containers/AddReview';
import VisibleReviewList from '../containers/VisibleReviewList';
import Product from './Product';
import './app.scss';

const App = () => {
  return (
    <>
      <section className="hero is-medium is-danger is-bold">
        <div className="hero-body is-small">
          <div className="container">
            <h1 className="title">Primary bold title</h1>
            <h2 className="subtitle">Primary bold subtitle</h2>
          </div>
        </div>
      </section>
      <section className="App section">
        <Product />
        <AddReview />
        <VisibleReviewList />
      </section>
    </>
  );
};

export default App;
