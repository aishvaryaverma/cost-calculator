import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';

const LetsBuildApp = props => {
    const state = useContext(Context);
    // eslint-disable-next-line
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculatePrice(state)
    }, [state]);

    const calculatePrice = (data) => {
        const { price, stepSelected } = data;
        const priceIndex = stepSelected.map(item => item.index);
        const total = price.map((item, i) => item.value[priceIndex[i]]).reduce((acc, val) => acc + val)
        setTotalPrice(total)
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="letsBuildApp">
            <div className="estimationBox">
                <h3>YOUR APP ESTIMATE COST</h3>
                <h2>{`$${totalPrice - 5000} - $${totalPrice}`}</h2>
                <p>Thanks for providing the details. We have calculated an approx. cost for the development of your app using our proprietary estimation tool</p>
            </div>

            <div className="formBox">
                <form onSubmit={e => onSubmit(e)}>
                    <fieldset>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="first_name" id="fname" className="input" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="last_name" id="lname" className="input" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className="input" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name="mobile" id="mobile" className="input" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="msg">Message</label>
                        <textarea type="text" name="msg" id="msg" className="input"></textarea>
                    </fieldset>

                    <button className="btn btn--block btn--rounded btn--primary">Submit Now!</button>
                </form>
            </div>
        </div>
    )
}

export default LetsBuildApp
