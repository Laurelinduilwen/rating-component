let nextReviewId = 0;
export const addReview = (text, rating) => ({
  type: 'ADD_REVIEW',
  id: nextReviewId++,
  text,
  rating,
});
