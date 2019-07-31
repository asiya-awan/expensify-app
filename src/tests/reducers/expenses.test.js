import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by id from expenses ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);

});

test('should not remove expense when id not found from expenses ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '15'
    }
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

});


test('should add expense into expenses ', () => {
    const expenseData = {
        id: '4',
        description: 'a new description',
        note: 'a new note',
        amount: 4500,
        createdAt: 45000
    }
    const action = { type: 'ADD_EXPENSE', expense: expenseData};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenseData]);

});

test('should edit expense by id ', () => {
    const updates = {
        note:'updated notes',
        description: 'updated description'
    }
    const action = { 
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates};

    const state = expensesReducer(expenses, action);
   
    expect(state).toEqual([
        expenses[0], 
        expenses[1]={
            id: '2',
            description: 'updated description',
            note: 'updated notes',
            amount: 109500,
            createdAt: -345600000 
        },
        expenses[2]]);

    expect(state[1].note).toBe(updates.note);

});

test('should not edit expense by id ', () => {
    const updates = {
        note:'updated notes',
        description: 'updated description'
    }
    const action = { 
        type: 'EDIT_EXPENSE',
        id: '5',
        updates};

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

});


test('shoudl set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});