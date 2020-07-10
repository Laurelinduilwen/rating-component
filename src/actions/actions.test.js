import * as actions from './index';

describe('test suite for actions', () => {
  it('Should create an action to add Review', () => {
    const date = new Date().toUTCString();
    const text = 'this is amazing!';
    const name = 'Shaxx';
    const rating = 5;
    const expectedAction = {
      type: 'ADD_REVIEW',
      id: 0,
      date,
      name,
      text,
      rating,
    };
    expect(actions.addReview(name, text, rating)).toEqual(expectedAction);
  });
});
