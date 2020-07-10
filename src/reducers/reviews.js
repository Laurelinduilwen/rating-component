const reviews = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          rating: action.rating,
        },
      ];

    default:
      return state;
  }
};

export default reviews;
