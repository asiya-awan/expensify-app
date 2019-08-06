import React from 'react';
import {startLoginGoogle, startLoginGitHub} from '../actions/auth';
import { connect } from 'react-redux';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">  
        <div className="box-layout__box">
            <h1 className=".box-layout__title">Expensify App</h1>  
            <p>Its time to get your expenses under control!</p> 
            <button className="button" value='Login with Google' onClick={startLoginGoogle()}>Login with Google</button>
            <button className="button" value='Login with GitHub' onClick={startLoginGitHub()}>Login with GitHub</button>
        </div>  
    </div>
    
);
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps) (LoginPage);