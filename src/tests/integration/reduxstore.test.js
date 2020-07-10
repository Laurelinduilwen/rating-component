import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { addReview } from '../../actions';

describe('Redux Store Integration Tests', () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });
  it('Should add one review', () => {
    store.dispatch(addReview('Shaxx', 'This is Amazing!', 5));
    /* console.log(store.getState()); */
    const review = store.getState().reviews.find((x) => x.text == 'This is Amazing!');
    expect(review.text).toEqual('This is Amazing!');
    expect(review.date).toEqual(new Date().toUTCString());
    expect(review.name).toEqual('Shaxx');
    expect(review.rating).toEqual(5);
  });
});
