import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import InquiryForm from './InquiryForm';
// import axios from 'axios';

const LetsBuildApp = props => {
    const state = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const [stepData, setStepData] = useState([]);

    useEffect(() => {
        calculatePrice(state);
        emailData(state);
    // eslint-disable-next-line
    }, [state]);

    const calculatePrice = (data) => {
        const { price, stepSelected } = data;
        const priceIndex = stepSelected.map(item => item.index);
        const total = price.map((item, i) => item.value[priceIndex[i]]).reduce((acc, val) => acc + val, 0)
        setTotalPrice(total);
    }
    const emailData = e => {
        const { stepSelected } = state;
        const nameArray = [
            'Platform',
            'Design',
            'User Registration',
            'Administration Features',
            'Service Integration',
            'Database Management',
            'Security',
            'App Billing',
            'Exclusive Features'
        ];
        const stepData = stepSelected.map((step, i) => {
            let name = nameArray[i];
            return [name, step.text]
        });
        setStepData(stepData);
    }

    const handleSubmit = async formData => {
        // console.log(stepData);
        // console.log(formData);
        
        // const data = JSON.stringify({ ...formData, stepData: [...stepData] });
        // const res = await axios({
        //     method: 'POST',
        //     url: '/api/mobileinquiry',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data
        // })
        // console.log(res.data)
    }

    return (
        <div className="letsBuildApp">
            <div className="estimationBox">
                <h3>YOUR APP ESTIMATE COST</h3>
                <h2>{`$${totalPrice - 5000} - $${totalPrice}`}</h2>
                <p>Thanks for providing the details. We have calculated an approx. cost for the development of your app using our proprietary estimation tool</p>
            </div>

            <InquiryForm onSubmit={handleSubmit} />
        </div>
    )
}

export default LetsBuildApp
