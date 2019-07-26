import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage  from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboard with other components', () => {
    const wrapper = shallow (<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot()

})