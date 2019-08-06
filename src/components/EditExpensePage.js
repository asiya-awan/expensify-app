import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense, removeExpense } from '../actions/expenses';
import RemoveModal from '../components/RemoveModal';

export class EditExpensePage extends React.Component {

  state = {
    selectedExpenseToRemove: undefined
  };
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  };

  // onRemove = () => {
   
  //   // this.props.startRemoveExpense({ id: this.props.expense.id });
  //   // this.props.history.push('/dashboard');
  // };
  onRemove = () => {
    this.setState(()=> ({
      selectedExpenseToRemove: this.props.expense
    }));    
  };

  handleConfirmRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    //this.setState(()=> ({selectedExpenseToRemove: undefined}))
    this.props.history.push('/dashboard');
  }

  handleClearSelectedExpenseToRemove =() => {
    this.setState(()=> ({selectedExpenseToRemove: undefined}))
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>

        </div>
        <RemoveModal 
          selectedExpenseToRemove={this.state.selectedExpenseToRemove}
          handleClearSelectedExpenseToRemove={this.handleClearSelectedExpenseToRemove}
          handleConfirmRemove={this.handleConfirmRemove}
          />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

