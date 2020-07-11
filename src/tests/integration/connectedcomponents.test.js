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
    const inputElement = getByTestId('add-name-input');
    const inputElement2 = getByTestId('add-review-input');
    fireEvent.change(inputElement, { target: { value: 'Shaxx' } });
    fireEvent.change(inputElement2, { target: { value: 'This is Amazing!' } });
    fireEvent.click(getByText('Add Review'));

    const pElement = getByTestId('test-name-input');

    expect(pElement.textContent).toBe('Shaxx');
  });

  //there is a major problem that I need to solve here. Right now I cannot simulate the rating function -_-
});
