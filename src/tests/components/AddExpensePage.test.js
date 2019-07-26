import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expense from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach( () => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow (<AddExpensePage addExpense = {addExpense} history={history}/>);
});

test('should render AddExpensePage correctly', () => {   
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  
    wrapper.find('ExpenseForm').prop('onSubmitP')(expense[0]);
    expect(addExpense).toHaveBeenLastCalledWith(expense[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})