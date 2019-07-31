import {addExpense, editExpense, removeExpense, startAddExpense }  from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)


//toBe  ===
test(' should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test(' should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note value', description: 'a new descrition'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value',
            description: 'a new descrition'
        }
    });
});

test(' sould setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),    
            ...expenses[0]
        }
    });
});

test(' sould add expense to database and store', (done) => {
    const store = mockStore({});
    const expenseData= {
        description:'description test',
        note: 'note test',
        amount: 8900,
        createdAt: 3456
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
     // console.log(actions[0]);
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
      });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');  //return promise
    }).then((snapshot) => { 
            expect(snapshot.val()).toEqual(expenseData);    
            done();  
        });
});

test(' sould add expense with defaults to database and store', (done) => {
    const store = mockStore({});
   const expenseDefaults = {
        description : '',
        note : '', 
        amount : 0,
        createdAt : 0
    };
    
       
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
     // console.log(actions[0]);
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefaults
        }
      });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');  //return promise
    }).then((snapshot) => { 
            expect(snapshot.val()).toEqual(expenseDefaults);    
            done();  
        });
});

    // store.dispatch(startAddExpense(expenseData)).then(() => {
    //     const actions = store.getActions();
    //    // console.log(actions[0]);
    //     expect(actions[0]).toEqual({
    //       type: 'ADD_EXPENSE',
    //       expense: {
    //           id: expect.any(String),
    //           ...expenseData
    //       }
    //     });
    //     database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
    //           expect(snapshot.val()).toEqual(expenseData);    
    //           done();  
    //       });
    //   });


// test(' sould setup add expense action object with default values', () => {

//     const action = addExpense();

//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),   
//             note: '',
//             description: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });