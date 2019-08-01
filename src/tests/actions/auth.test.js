import { login, logout, startLogin, startLogout } from '../../actions/auth';

test('should genearte login action object', () => {
    const uid = '2345';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should genearte logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

