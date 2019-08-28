import React, { useContext } from 'react';
import { Context } from '../../context';

const RegisterLogin = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 3,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });

        push('/multi-language');
    }

    return (
        <div className="questionsBox">
            <h1>Will the user be able to Sign-in / Signup?</h1>
            <p>An email login is the simplest option for the user to start with, unless you want to integrate your app with social media services like Facebook or Twitter</p>
            <ul className="options">
                <li onClick={e => updateAppState(0, e)}>Email</li>
                <li onClick={e => updateAppState(1, e)}>Social</li>
                <li onClick={e => updateAppState(2, e)}>No</li>
                <li onClick={e => updateAppState(3, e)}>I Don't Know</li>
            </ul>
        </div>
    )
}

export default RegisterLogin
