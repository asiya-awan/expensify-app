import moment from 'moment';
import filterReducer from '../../reducers/filters';
import setStartDate from '../../actions/filters';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',   //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('setting up filter reducer default values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual(
        filtersReducerDefaultState
    )
})


test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  
    expect(state.sortBy).toBe('amount');
});

test('should set srotyBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');

})

test('should set text filter', () => {
    const text = 'This is my filter';
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }

    const action = { type: 'SET_TEXT_FILTER', text};
    const state = filterReducer(currentState, action);
    expect(state.text).toBe(text);

});


test('should set startDate filter', () => {
    const startDate = moment();
    const action = { 
        type: 'SET_START_DATE',
        startDate
        };
    const state = filterReducer( undefined, action);
   
    expect(state.startDate).toEqual(startDate);

});

test('should set endDate filter', () => {
    const endDate = moment();
    const action = { 
        type: 'SET_END_DATE',
        endDate
        };
    const state = filterReducer( undefined, action);
   
    expect(state.endDate).toEqual(endDate);

});

