import 'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../components/App';
import rootReducer from '../../reducers';
import { render, fireEvent } from '@testing-library/react';

const store = createStore(rootReducer);

describe('Connected component full app integration tests', () => {
  it('should add Review item using fireEvent', () => {
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const inputElement = getByTestId('add-review-input');
    fireEvent.change(inputElement, { target: { value: 'buy milk' } });
    fireEvent.click(getByText('Add Review'));

    const liElement = container.querySelector('li');

    expect(liElement.textContent).toBe('buy milk');
  });
});
