import React from 'react';
import { mount } from 'enzyme';
import PostForm from './index';


const createTestProps = (props) => ({
  ...props
})

describe('PostForm module case--->', () => {
  it('PostForm match snapshot', () => {
    let props = createTestProps({
        editItem : { "userId": 1, "id": 1, "title": "title1", "body": "body1" }
    })
    let wrapper = mount(<PostForm {...props}></PostForm>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});