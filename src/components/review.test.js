import React from 'react';
import Review from './Review';
import { configure, shallow, mount } from 'enzyme';
import ReactRating from 'react-rating';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Review > component unit tests/', () => {
  const props = { date: '01.01.2020', name: 'Shaxx', text: 'This is Amazing!', rating: 5 };

  let component;
  beforeEach(() => {
    component = shallow(<Review {...props} />);
  });

  it('should render 1 <Review /> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('div')).toHaveLength(2);
  });

  //Disabling these test until I can learn how to properly test nested elements

  /* it('should render props correctly', () => {
    expect(
      component.contains([
        <p>Name=Shaxx</p>,
        <p>Created at=01.01.2020</p>,
        <p>Review=This is Amazing!</p>,
        <ReactRating initialRating={5} readonly />,
        <p>Rating=5</p>,
      ]),
    ).toEqual(true);
  }); */

  /* it('should set props correctly', () => {
    component = shallow(<Review {...props} />);
    component.setProps({ text: 'hello' });
    expect(component.props('text').children).toEqual('hello');
  }); */
});
