import React from 'react';
import {startLogin} from '../actions/auth';
import { connect } from 'react-redux';

export const LoginPage = ({startLogin}) => (
    <div>       
            <button value='Login' onClick={startLogin}>Login</button>
    </div>
    
);
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(mapDispatchToProps) (LoginPage);