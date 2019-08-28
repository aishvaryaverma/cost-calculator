import React, { useContext } from 'react';
import { Context } from '../../context';

const AppDesign = ({ history: { push } }) => {
    const initialState = useContext(Context);
    const dispatch = initialState.dispatch;
    
    const updateAppState = (index, e) => {
        const data = {
            id: 1,
            index,
            text: e.target.textContent
        }
        dispatch({ type: 'UPDATE_STATE', payload: data });

        push('/project-status');
    }

    return (
        <div className="questionsBox">
            <h1>How would you like your app to be designed?</h1>
            <p>Does your app need to be designed from the scratch? Just need a re-design or simple interface? Pick your option!</p>
            <ul className="options">
                <li onClick={e => updateAppState(0, e)}>Simple Interface</li>
                <li onClick={e => updateAppState(1, e)}>Custom Interface</li>
                <li onClick={e => updateAppState(2, e)}>Replicated Web Interface</li>
                <li onClick={e => updateAppState(3, e)}>No Need For Design</li>
            </ul>
        </div>
    )
}

export default AppDesign