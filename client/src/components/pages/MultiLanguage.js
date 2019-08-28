import React, { useContext } from 'react';
import { Context } from '../../context';

const MultiLanguage = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 4,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });

        push('/inapp-payments');
    }

    return (
        <div className="questionsBox">
            <h1>Do you want a multilingual application?</h1>
            <p>Creating a multilingual app lets you your business reach more people, giving you a new competitive advantage</p>
            <ul className="options">
                <li onClick={e => updateAppState(0, e)}>Yes</li>
                <li onClick={e => updateAppState(1, e)}>No</li>
                <li onClick={e => updateAppState(2, e)}>I Don't Know</li>
            </ul>
        </div>
    )
}

export default MultiLanguage
