import React from 'react';
import  ExpenseForm  from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component{

  onSubmit= (expense) => {
    //console.log(expense);
    this.props.startAddExpense(expense);
    this.props.history.push('/')
  }

  render() {
    return (
        <div>
          <h3>Add Expense</h3>
          <ExpenseForm onSubmit = {this.onSubmit} />
        </div>
   )
  }
}

const mapDispatchToProps = (dispatch) => 
  ({startAddExpense : (expense) => dispatch(startAddExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// const AddExpensePage = (props) => (
//   <div>
//     <h3>Add Expense</h3>
//     <ExpenseForm 
//       onSubmitP = {(expense) => {
//         console.log(expense);
//         props.onSubmitD(expense);
//         // props.dispatch(addExpense(expense));
//         props.history.push('/')
//       }}
//       />
//   </div>
// );