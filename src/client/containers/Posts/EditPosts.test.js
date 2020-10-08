import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import EditPost from './EditPost';
import PostForm from '../../components/PostForm';
import Header from '../../components/Header';

const mockStore = configureStore();
const userStore = mockStore({
  postsReducer: {
    posts_data: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }],
    loading: true
  }
});
const createTestProps = (props) => ({
  match : {
    params : {
      id: 1
    }
  },
  ...props
})

describe('EditPost module case--->', () => {
  it('EditPost match snapshot', () => {
    let props = createTestProps({
      posts: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }],
      loading: true
    })
    let wrapper = mount(<Provider store={userStore}><EditPost {...props}></EditPost></Provider>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('EditPost run without crashing', () => {
    const component = shallow(<Provider store={userStore}><EditPost /></Provider>);
    expect(component.find(EditPost)).toBeDefined();
  });

  it('EditPost run without crashing', () => {
    const component = shallow(<Provider store={userStore}><EditPost ><Header/><PostForm/></EditPost></Provider>);
    expect(component.find(EditPost)).toBeDefined();
  });

});