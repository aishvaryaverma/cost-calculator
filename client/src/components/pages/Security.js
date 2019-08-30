import React, { useContext } from 'react';
import { Context } from '../../context';
import Layout from '../layout/Layout';

const Security = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 0,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });
        push('/app-billing');
    }

    return (
        <Layout>
            <div className="questionsBox">
                <h1>Platform</h1>
                <h4>What type of App do you need for your business?</h4>
                <ul className="options">
                    <li onClick={e => updateAppState(0, e)}>iOS</li>
                    <li onClick={e => updateAppState(1, e)}>Android</li>
                    <li onClick={e => updateAppState(2, e)}>Hybrid</li>
                    <li onClick={e => updateAppState(2, e)}>Progressive Web Apps</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Security