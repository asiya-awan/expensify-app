import authReducer from '../../reducers/auth';

test('should set login state', () => {
    const state = authReducer({} , {type: 'LOGIN', uid: '123'});
    console.log(state);
    expect(state).toEqual({
        uid: state.uid
    });
    //expect(state.uid).toBe(state.uid);
})

test('should clear uid for logout', () => {
    const action =  {type: 'LOGOUT'}
    const state = authReducer({}, action);
    //console.log(action);
    expect(state).toEqual({});
       
});