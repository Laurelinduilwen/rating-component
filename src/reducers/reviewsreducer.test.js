import reviews from './reviews';

describe('Reviews Reducer Unit Tests', () => {
  it('shold return an empty array when initial state and action is undefined', () => {
    expect(reviews(undefined, {})).toEqual([]);
  });

  it('shold update initial state by adding 1 Review item to the list', () => {
    const addReviewAction = {
      type: 'ADD_REVIEW',
      id: 1,
      name: 'author',
      text: 'this sucks',
      rating: 1,
    };
    expect(reviews([], addReviewAction)).toEqual([
      {
        id: 1,
        name: 'author',
        text: 'this sucks',
        rating: 1,
      },
    ]);
  });

  it('shold update initial state by adding the 2nd Review item to the list', () => {
    const initialState = [
      {
        id: 1,
        name: 'author',
        text: 'this sucks',
        rating: 1,
      },
    ];

    const addReviewAction = {
      type: 'ADD_REVIEW',
      id: 2,
      name: 'author 2',
      text: 'this is amazing!',
      rating: 5,
    };
    expect(reviews(initialState, addReviewAction)).toEqual([
      {
        id: 1,
        name: 'author',
        text: 'this sucks',
        rating: 1,
      },
      {
        id: 2,
        name: 'author 2',
        text: 'this is amazing!',
        rating: 5,
      },
    ]);
  });
});
