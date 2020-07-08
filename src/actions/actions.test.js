import * as actions from './index';

describe('test suite for actions', () => {
  it('Should create an action to add ToDo', () => {
    const text = 'go shopping';
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('Should create an action to set visibility filter', () => {
    const filter = 'SHOW_ALL';
    expect(actions.setVisibilityFilter(filter).filter).toEqual('SHOW_ALL');
  });

  it('Should create an action to toggle a ToDo', () => {
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 0,
    };
    expect(actions.toggleTodo(0)).toEqual(expectedAction);
  });
});
