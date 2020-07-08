import React from 'react';
import Todo from './Todo';
import { configure, shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Todo > component unit tests/', () => {
  const mockFn = jest.fn();
  const props = { onClick: mockFn, completed: false, text: 'buy milk' };

  let component;
  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  });

  it('should render 1 <Todo /> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('li')).toHaveLength(1);
  });

  it('should render props correctly', () => {
    /*    console.log(component.props()); */
    expect(component.props().children).toEqual('buy milk');
  });

  it('should set props correctly', () => {
    component.setProps({ text: 'hello' });
    expect(component.props().children).toEqual('hello');
  });

  it('shouldcall onclick handler when clicked', () => {
    component.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<Todo /> styling behaviour', () => {
  const mockFn = jest.fn();
  it('should not have linethrough when ToDo is incomplete', () => {
    const component = shallow(<Todo onClick={mockFn} completed={false} text={'go shopping'} />);
    expect(component.props().style).toEqual({ textDecoration: 'none' });
  });

  it('should have linethrough when ToDo is complete', () => {
    const component = shallow(<Todo onClick={mockFn} completed={true} text={'go shopping'} />);
    expect(component.props().style).toEqual({ textDecoration: 'line-through' });
  });
});
