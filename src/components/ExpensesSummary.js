import React from 'react';
import {connect} from 'react-redux';
import  selectExpenses  from '../selectors/expenses';
import  selectExpensesTotal  from '../selectors/expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({visibleExpensesCount, visibleExpensesTotal,  invisibleExpensesCount }) => {
    const expenseWord = visibleExpensesCount === 1 ? 'expense' :'expenses';
    const formattedExpensesTotal = numeral(visibleExpensesTotal/100).format('$0,0.00');

    return (
        <div className= "page-header">
            <div className="content-container">
                <h1 className="page-header__title"> Viewing <span> {visibleExpensesCount}  </span> {expenseWord} totalling <span> {formattedExpensesTotal} </span> </h1> 
                { invisibleExpensesCount> 0 && <p>There are <strong> {invisibleExpensesCount} </strong> expenses which are hidden because of applied filter.</p>} 
                <div className="page-header__actions">
                    <Link to="/create" className="button">Create Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const totalExpenses = selectExpenses(state.expenses, {text: '', sortBy: 'date', startDate:'', endDate:''});
    console.log('Total Expenses',totalExpenses.length);
    console.log('Visible Expenses',visibleExpenses.length);
    const invisibleExpensesCount= (totalExpenses.length)-(visibleExpenses.length);
    return{
        visibleExpensesCount: visibleExpenses.length,
        visibleExpensesTotal: selectExpensesTotal(visibleExpenses),
        invisibleExpensesCount: invisibleExpensesCount
    }

}
export default connect(mapStateToProps)(ExpensesSummary);
