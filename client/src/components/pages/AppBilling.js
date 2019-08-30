import React, { useContext } from 'react';
import { Context } from '../../context';
import Layout from '../layout/Layout';

const AppBilling = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 5,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });

        push('/exclusive-features');
    }

    return (
        <Layout>
            <div className="questionsBox">
                <h1>Do you want to integrate payment gateway in the app?</h1>
                <p>One-time payments though cheaper, in-app purchases result in higher returns if you have an engaged consumer base</p>
                <ul className="options">
                    <li onClick={e => updateAppState(0, e)}>Yes</li>
                    <li onClick={e => updateAppState(1, e)}>No</li>
                    <li onClick={e => updateAppState(2, e)}>I Don't Know</li>
                </ul>
            </div>
        </Layout>
    )
}

export default AppBilling
