import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Routes from './index';
import Home from '../Home';
import EditPost from '../Posts/EditPost';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('Routes module case--->', () => {
  it('Routes run without crashing', () => {
    const component = shallow(<Routes />);
    expect(component.find(Routes)).toBeDefined();
  });

  it('Routes run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><EditPost /></Provider>, {store: userStore});
    expect(component.find(EditPost)).toBeDefined();
  });

  it('Routes run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><Home /></Provider>, {store: userStore});
    expect(component.find(Home)).toBeDefined();
  });

});