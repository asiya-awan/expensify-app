import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ADD_EXPENSE
const addExpense = (
      {
        description = '',
        note = '', 
        amount = 0,
        createdAt = 0
      } = {}
    ) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        //property shorthand
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// const removeExpense = (id={}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// })

//EDIT_EXPENSE
const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

//SORT_BY_DATE

const sortByDate = (sortBy) => ({
  type: 'SORT_BY_DATE',
  sortBy,
});

//SORT_BY_AMOUNT
const sortByAmount = (sortBy) => ({
  type: 'SORT_BY_AMOUNT',
  sortBy,
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

//2 property state => 2 reducers for each prop  => merge both reducers in one

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense]
           //return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
            // return state.filter((expense) => 
            //     {    
            //         if( expense.id != action.id ){
            //             return expense;
            //         }
            //     });
        case 'EDIT_EXPENSE':
                
            return state.map((expense) => {
                    
                if(expense.id === action.id)
                    // return {...expense, amount:action.updates.amount}
                    return {...expense, ...action.updates}
                else    
                    return expense;
            });


        default:
            return state;
    }
};

//Filters Reducer
const filersReducerDefaultState = {
    text: '',
    sortBy: 'date',   //date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
          return {...state, text: action.text}

        case 'SORT_BY_DATE':
            return {...state, sortBy: action.sortBy}

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: action.sortBy}

        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}

        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}

        default:
          return state;
    }
};

//timestamps (ms) to store timezone independent time data
//January 1st 1970 (unix epech) starting point for all of our timestamp
//3400, 10, -203


//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    //console.log(`StartDate: ${startDate}, EndDate: ${endDate}, createdAt: ${expense.createdAt}`);
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;
    //console.log(`StartDateMatch:  ${startDateMatch} EndDateMatch:  ${endDateMatch}`);
    const textMatch = 
      typeof text === 'string' && 
      expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAT < b.createdAt ? 1 : -1; // [-1000,-2100, 300] => [300, -1000, -2100]
    
     } else if (sortBy ==='amount') {
      return a.amount < b.amount ? 1 : -1;  //on True b will comes first [100,300,200] => [300,200,100]
    }
  });
}

//store createion 
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log("VisibleExpenses: ", visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent of Apartment @Latifabad', note: 'note example', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Buy Laptop', note: 'note example', amount: 300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description: 'Buy Coffee', note: 'note example', amount: 100, createdAt: -1000}));

//console.log(expenseOne);


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense( expenseTwo.expense.id, { amount:500} ));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByDate('date'));
 store.dispatch(sortByAmount('amount'));
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(101));

const demoState = {
    expenses: [{
        id: 'adsfkadsjf',
        description: 'January Rent',
        note: 'This was the final payment for the address',
        amount: 54000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',   //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

//Spreading Objects
// const user = { name:'asiya', age:24};

// console.log({...user, location:'Pakistan'});  //{ name:'asiya', age:24, location:'Pakistan'}

// function getUser(user1){
//     console.log('User1: ',{...user1}); //{ name:'sana', subjec:'React'}
//     console.log({...user1, name:'kainat'});  //overridding;  //{ name:'kainat', subjec:'React'}
//     console.log(user1.name); //sana
//     console.log("combining + spreading 2 objects; user + user1: ",
//       {...user, ...user1}); //{ name:'sana', age:24, subjec:'React'}
//     console.log("combining + spreading 2 objects; user + user1: ",
//       {...user1, ...user}); //{name: "asiya", subjec: "React", age: 24}

// }
// getUser({name:'sana', subjec:'React'});  //{ name:'sana', subjec:'React'}a