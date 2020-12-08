import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



let wrapper;

const loading = false
beforeEach(() => {
  wrapper = shallow(<App loading={loading} />);
});

describe(' SpaceX Launch Programs', () => {


  it('should render navbar', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('#navbar')).toHaveLength(1);
  })
  it('should render Years', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('#FilterData')).toHaveLength(15);
  })
  it('should render successfull launch', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('#LaunchFilter')).toHaveLength(2);
  })
  it('should render sucessfull landing', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('#LandFilter')).toHaveLength(2);
  })
})