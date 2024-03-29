import React from 'react';
import {shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

});

test('should render correctly ExpenseForm w/ expense data ', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);

});

test('should set description on Input chagnes', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);

});

test('should set note on Input chagnes', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        persist : () => {},
        target: { value }
    });

    expect(wrapper.state('note')).toBe(value);
  
});

test('should set amount on valid input change', () => {
    const value = '134.50';
    const wrapper = shallow(<ExpenseForm />);

  
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe(value);

});


test('should NOt set amount on invalid input change', () => {
    const value = '1234.678';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe('');

});


test('should call onSubmit prop of ExpenseForm for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow (<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });

});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    // wrapper.find(SingleDatePicker).prop('onDateChange')(now);

    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);    expect(wrapper.state('createdAt')).toEqual(now);

});

test('should set focus on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);

});