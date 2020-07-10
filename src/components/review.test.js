import React from 'react';
import Review from './Review';
import { configure, shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Review > component unit tests/', () => {
  const props = { date: 'asd', name: 'Author', text: 'buy milk', rating: 4 };

  let component;
  beforeEach(() => {
    component = shallow(<Review {...props} />);
  });

  it('should render 1 <Review /> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('li')).toHaveLength(1);
  });

  it('should render props correctly', () => {
    console.log(component.props());
    expect(component.props().children).toEqual('buy milk');
  });

  it('should set props correctly', () => {
    component.setProps({ text: 'hello' });
    expect(component.props().children).toEqual('hello');
  });
});
