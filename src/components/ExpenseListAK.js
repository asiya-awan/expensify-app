import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        <p>Filter text: {props.filters.text}</p>
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Note</th>
                <th>Amount</th>
                <th>CreatedAt</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {
            props.expenses.map((expense) => (
                <ExpenseListItem key= {expense.id} {...expense}/>           
            ))
        }
        </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);

