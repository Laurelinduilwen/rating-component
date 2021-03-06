const reviews = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [
        ...state,
        {
          id: action.id,
          date: action.date,
          name: action.name,
          text: action.text,
          rating: action.rating,
        },
      ];

    default:
      return state;
  }
};

export default reviews;
