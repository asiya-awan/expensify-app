import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';
import moment from 'moment';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    );
});

test('should render ExpenseList correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilter w/ alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

//should handle text change
test('should handle text change', () => {
    const value = 'buy';
    wrapper.find('input').at(0).simulate('change', {
        target: {value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    
});
// should sort by date
test('should sort by date', () => {
    const value='date';
    wrapper.setProps({
        filters: altfilters
    });
    wrapper.find('select').simulate('change', {
        target: {value }
    });
    expect(sortByDate).toHaveBeenCalled();
    
});
// shoudl sort by amount
test('should sort by amount', () => {
    const value='amount';
  
    wrapper.find('select').simulate('change', {
        target: {value }
    });
    expect(sortByAmount).toHaveBeenCalled();
    
});

// should handle date change
test('should handle dates change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
  
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    
});
//shoud handle date focus change

test('should handle date focus change', () => {
    const calendarFocused = 'endDate';
  
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
       
});