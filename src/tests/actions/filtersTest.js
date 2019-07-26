import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';
import { start } from 'repl';

test('test the set start date', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('test the set end date', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});


test('test the sort by date', () => {
    //const sortBy = 'date';
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('test the sort by amount', () => {
    const sortBy = 'amount';
    const action = sortByAmount(sortBy);
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy
    })
});

test('test the text filter with provided value', () => {
    const text = 'buy';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('test the text filter with default no value', () => {

    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});