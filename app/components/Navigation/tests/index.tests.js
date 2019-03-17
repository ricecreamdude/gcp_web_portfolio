/* Testing the Navigation component */

import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Navigation from '../index';


const renderComponent = (props = {}) => {
  const wrapper = mount(
    <Navigation {...props}/>,
  );

  return enzymeFind(wrapper, Navigation);
}

describe('<Navigation />', () =>{
  it('should render a component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual();
  })
});