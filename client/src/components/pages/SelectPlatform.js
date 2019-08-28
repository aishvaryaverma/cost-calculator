import React, { useContext } from 'react';
import { Context } from '../../context';

const SelectPlatform = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 0,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });
        
        push('/app-design');
    }

    return (
        <div className="questionsBox">
            <h1>Choose the desired platform to deploy your app: Android/ iOS?</h1>
            <p>How much to make an app? The first question that comes to mind while building an app. Let's find the estimated development cost of your desired platform with our app cost calculator under a minute.</p>
            <ul className="options">
                <li onClick={e => updateAppState(0, e)}>Android App</li>
                <li onClick={e => updateAppState(1, e)}>iOS App</li>
                <li onClick={e => updateAppState(2, e)}>Android &amp; iOS</li>
            </ul>
        </div>
    )
}

export default SelectPlatform