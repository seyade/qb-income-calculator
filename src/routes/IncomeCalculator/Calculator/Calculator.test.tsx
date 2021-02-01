import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { Calculator } from './Calculator';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialState = {
  salesIncome: 0,
  commissions: 0,
  construction: 0,
  otherIncome: 0,
  totalIncome: 0,
};

describe('Calculator', () => {
  const store = mockStore(initialState);

  const wrapper = shallow(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has Income from sales field', () => {
    expect(wrapper.find('#incomeFromSales')).toBeTruthy();
  });

  describe('Contains TotalIncome', () => {
    it('has TotalIncome section', () => {
      expect(wrapper.find('TotalIncome')).toBeTruthy();
      expect(
        wrapper.find('TotalIncome').find('.total-income__result')
      ).toBeTruthy();
    });

    it('should have a total income of 1000 pounds', () => {
      let input = wrapper
        .childAt(0)
        .dive()
        .find('TotalIncome')
        .find('.total-income__result');

      input.at(0).simulate('change', { target: { value: '1000' } });

      expect(
        wrapper.find('TotalIncome').find('.total-income__result').text()
      ).toEqual(1000);
    });
  });
});
