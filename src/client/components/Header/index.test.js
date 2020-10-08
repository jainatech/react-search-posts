import React from 'react';
import { mount } from 'enzyme';
import Header from './index';
import { BrowserRouter as Router } from 'react-router-dom';

const createTestProps = (props) => ({
  ...props
})

describe('Header module case--->', () => {
  it('Header match snapshot', () => {
    let props = createTestProps({
        text: 'Hello',
        search: true
    })
    let wrapper = mount(<Router><Header {...props}></Header></Router>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});