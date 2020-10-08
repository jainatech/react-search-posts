import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from '../../components/Header';
import List from '../../components/List';
import Home from './index';
const mockStore = configureStore();
const userStore = mockStore({
  postsReducer: {
    posts_data: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }],
    loading: true
  }
});

const createTestProps = (props) => ({
  ...props
})

describe('HOME module case--->', () => {
  it('Home match snapshot', () => {
    let props = createTestProps({
      posts: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }],
      loading: true
    })
    let wrapper = mount(
      <Provider store={userStore}><Home {...props}></Home></Provider>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('Home Renders without crashing', () => {
    const component = shallow(<Provider store={userStore}><Home /></Provider>);
    expect(component.find(Home)).toBeDefined();
  });

  it('Home run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><Header /></Provider>, { store: userStore });
    expect(component.find(Header)).toBeDefined();
  });
});