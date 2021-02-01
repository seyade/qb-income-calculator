import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card', () => {
  const wrapper = shallow(
    <Card title="My card">
      <p>Card content</p>
    </Card>
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has card title', () => {
    expect(wrapper.find('h3').text()).toEqual('My card');
  });

  it('has card content', () => {
    expect(wrapper.find('section').children().text()).toContain('Card content');
  });
});
