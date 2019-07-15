import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';

describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< LoginForm /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})