import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import EditPost from './EditPost';
import PostForm from '../../components/PostForm';
import Header from '../../components/Header';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('EditPost module case--->', () => {
  it('EditPost run without crashing', () => {
    const userStore = mockStore({user:{user_data:[{id:"d" , title:"a", body:"b"}]}});
    const component = shallow(<Provider store={userStore}><EditPost /></Provider>);
    expect(component.find(EditPost)).toBeDefined();
  });

  it('EditPost run without crashing', () => {
    const userStore = mockStore({user:{user_data:[{id:"d" , title:"a", body:"b"}]}});
    const component = shallow(<Provider store={userStore}><EditPost ><Header/><PostForm/></EditPost></Provider>);
    expect(component.find(EditPost)).toBeDefined();
  });

});