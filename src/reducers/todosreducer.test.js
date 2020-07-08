import todos from './todos';

describe('Todos Reducer Unit Tests', () => {
  it('shold return an empty array when initial state and action is undefined', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('shold update initial state by adding 1 ToDo item to the list', () => {
    const addTodoAction = {
      type: 'ADD_TODO',
      id: 1,
      text: 'buy milk',
    };
    expect(todos([], addTodoAction)).toEqual([
      {
        completed: false,
        id: 1,
        text: 'buy milk',
      },
    ]);
  });

  it('shold update initial state by adding the 2nd ToDo item to the list', () => {
    const initialState = [
      {
        id: 1,
        text: 'buy milk',
        completed: false,
      },
    ];

    const addTodoAction = {
      type: 'ADD_TODO',
      id: 2,
      text: 'go shopping',
    };
    expect(todos(initialState, addTodoAction)).toEqual([
      {
        completed: false,
        id: 1,
        text: 'buy milk',
      },
      {
        completed: false,
        id: 2,
        text: 'go shopping',
      },
    ]);
  });

  it('toggle incomlete todo to complete', () => {
    const initialState = [
      {
        id: 1,
        text: 'buy milk',
        completed: false,
      },
    ];

    const toggleTodoAction = {
      type: 'TOGGLE_TODO',
      id: 1,
    };
    expect(todos(initialState, toggleTodoAction)).toEqual([
      {
        completed: true,
        id: 1,
        text: 'buy milk',
      },
    ]);
  });
});
