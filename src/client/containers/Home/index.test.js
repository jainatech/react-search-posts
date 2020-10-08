import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from '../../components/Header';
import List from '../../components/List';
import Home from './index';
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('HOME module case--->', () => {
  it('Home Renders without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><Home /></Provider>);
    expect(component.find(Home)).toBeDefined();
  });

  it('Home run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><Header /></Provider>, {store: userStore});
    expect(component.find(Header)).toBeDefined();
  });
});