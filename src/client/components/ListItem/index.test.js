import React from 'react';
import { mount } from 'enzyme';
import ListItem from './index';
import { BrowserRouter as Router } from 'react-router-dom';



const createTestProps = (props) => ({
  type : 'home_posts_list',
  ...props
})

describe('ListItem module case--->', () => {
  it('ListItem match snapshot', () => {
    let props = createTestProps({
        item : { "userId": 1, "id": 1, "title": "title1", "body": "body1" },
        index : 1
    })
    let wrapper = mount(<Router><ListItem {...props}></ListItem></Router>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});