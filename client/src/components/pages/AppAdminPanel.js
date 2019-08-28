import React, { useContext } from 'react';
import { Context } from '../../context';

const AppAdminPanel = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 6,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });

        push('/lets-build-your-app');
    }

    return (
        <div className="questionsBox">
            <h1>Will your app need to be integrated with a website?</h1>
            <p>It's always recommended to have your web and mobile apps synced for better user engagement</p>
            <ul className="options">
                <li onClick={e => updateAppState(0, e)}>Yes</li>
                <li onClick={e => updateAppState(1, e)}>No</li>
                <li onClick={e => updateAppState(2, e)}>I Don't Know</li>
            </ul>
        </div>
    )
}

export default AppAdminPanel
