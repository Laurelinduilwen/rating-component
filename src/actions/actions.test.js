import * as actions from './index';

describe('test suite for actions', () => {
  it('Should create an action to add Review', () => {
    const text = 'this is amazing!';
    const expectedAction = {
      type: 'ADD_REVIEW',
      id: 0,
      text,
      name,
      rating,
    };
    expect(actions.addReview(text)).toEqual(expectedAction);
  });
});
