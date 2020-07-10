let nextReviewId = 0;
export const addReview = (name, text, rating) => ({
  type: 'ADD_REVIEW',
  id: nextReviewId++,
  date: new Date().toUTCString(),
  name,
  text,
  rating,
});
