import React, { useContext } from 'react';
import { Context } from '../../context';
import Layout from '../layout/Layout';

const ServiceIntegration = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 2,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });

        push('/database-management');
    }

    return (
        <Layout>
            <div className="questionsBox">
                <h1>What stage of the project are you currently at?</h1>
                <p>This helps us get a better understanding about how much time it takes your app to deployment / launch</p>
                <ul className="options">
                    <li onClick={e => updateAppState(0, e)}>Idea</li>
                    <li onClick={e => updateAppState(1, e)}>Wireframes</li>
                    <li onClick={e => updateAppState(2, e)}>In Development</li>
                </ul>
            </div>
        </Layout>
    )
}

export default ServiceIntegration
