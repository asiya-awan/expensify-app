redux-101.js
Type
Javascript
Size
3 KB (2,800 bytes)
Storage used
5 KB (4,887 bytes)
Location
playground
Owner
me
Modified
Jul 19, 2019 by me
Opened
Jul 19, 2019 by me
Created
Jul 18, 2019 with Google Drive Web
Add a description
Viewers can download

import {createStore} from 'redux';

// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };


// const incrementCount = (payload = {}) => ({  
//      type: 'INCREMENT',
//      incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy: 1
//     });

    const incrementCount = ({incrementBy = 1} = {}) => ({  
        type: 'INCREMENT',
        incrementBy
    });


    const decrementCount = ({decrementBy = 2} = {}) => ({  
        type: 'DECREMENT',
        decrementBy
    });
    const setCount = ({count = 0} = {}) => ({  
        type: 'SET',
        count
    });

    const resetCount = () => ({  
        type: 'RESET',
    });

//Reducers
//1. pure functions; output is only dertermined by the input and don't interact w/ anything outside that func
//2. Never change state or action; don't mutate, just reading off of both, returning an object that represents hte new state


//ex; of not pure function as it depends also on global var b
 let a =10;
 const add = (b) => {
     return a+b;
 };
//ex; of not pure function as its interacting w/ var result which is outside func scope
 let result;
 const add0 = (a,b) => {
    result= a+b;
};

 //ex; pure func
 const add1 = (a,b) => {
    return a+b;
};

const countReducer = (state = {count:0}, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            const incrementBy= typeof action.incrementBy === 'number'?action.incrementBy:1;
            return { count: state.count + incrementBy};
        } 
        case 'DECREMENT': {
            const decrementBy = typeof action.decrementBy === 'number'?action.decrementBy:1;
            return {count: state.count -decrementBy}
        }
        case 'RESET': {
            return {count: 0}
        }
        case 'SET': {
            const count= typeof action.count === 'number'?action.count:state.count;
            return { count:count};
        }

        default: 
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe( () => {
    console.log(store.getState());  
});

// const unsbuscribe = store.subscribe( () => {
//     console.log(store.getState());  
// });

console.log ('100');

//Actions - an object that gets sent to the store.

//increment, decrement, reset
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:10}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:5})); 
store.dispatch(resetCount());
store.dispatch(setCount({count:100}));

store.dispatch(incrementCount({incrementBy:10}));

//unsbuscribe();

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 2
// });

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101

// });

