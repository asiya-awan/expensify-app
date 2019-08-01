import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
// import './playground/promises';

const store = configureStore();
const jsx = (
  <Provider store = {store}>
      <AppRouter />
    </Provider>
  );
  
 let hasRendered = false;
  const renderApp = () => {
    if(!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
    }
  };

  ReactDOM.render(<p> Loading .....</p>, document.getElementById('app'));
  
firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
  
  // const expenseOne = store.dispatch(addExpense({description: 'Rent of Apartment @Latifabad', note: 'note example 1', amount: 100, createdAt: -21000}));
  // const expenseTwo = store.dispatch(addExpense({description: 'Buy Laptop', note: 'note example 2', amount: 10, createdAt: 1000}));
  // const expenseThree = store.dispatch(addExpense({description: 'Buy Coffee', note: 'note example 3', amount: 200, createdAt: 2000}));
  // const expenseFour = store.dispatch(addExpense({description: 'Buy Chocolate', note: 'note example 4', amount: 50, createdAt: 600}));
  // const expenseFive = store.dispatch(addExpense({description: 'Buy Basket', note: 'note example 5', amount: 100, createdAt: 500}));
  
  // store.subscribe(() => {
    //     const state = store.getState();
    //     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //       console.log("VisibleExpenses: ", visibleExpenses);
    //   });
  // const state = store.getState();
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log("VisibleExpenses: ", visibleExpenses);
  // store.dispatch(setTextFilter('rent'));
  
  // setTimeout(() => {
  //   store.dispatch(setTextFilter('buy'));
  // }, 3000)
//console.log(expenseOne);


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense( expenseTwo.expense.id, { amount:500} ));

//store.dispatch(sortByDate('date'));
//store.dispatch(sortByAmount('amount'));
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(101));
