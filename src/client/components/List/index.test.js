import React from 'react';
import { mount } from 'enzyme';
import List from './index';
import { BrowserRouter as Router } from 'react-router-dom';

const createTestProps = (props) => ({
  type : 'home_posts_list',
  ...props
})

describe('List module case--->', () => {
  it('List match snapshot', () => {
    let props = createTestProps({
        data : [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }]
    })
    let wrapper = mount(<Router><List {...props}></List></Router>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});