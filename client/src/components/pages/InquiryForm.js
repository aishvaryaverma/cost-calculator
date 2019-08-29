import React,  { useState } from 'react';

const InquiryForm = props => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: '',
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            message: '',
        }
    });
    const { firstName, lastName, email, mobile, message, errors }= formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(firstName === '') {
            return setFormData({ ...formData, errors: { firstName: 'First name is required.' } })
        } else {
            setFormData({ ...formData, errors: { firstName: '' } })
        }

        props.onSubmit({ firstName, lastName, email, mobile, message })
    }

    return (
        <div className="formBox">
            <form onSubmit={e => onSubmit(e)}>
                <fieldset>
                    <label htmlFor="fname">First Name</label>
                    <input
                        id="fname"
                        type="text"
                        name="firstName"
                        className="input"
                        value={firstName}
                        onChange={e => onChange(e)}
                    />
                    <span className="error">{errors.firstName}</span>
                </fieldset>
                <fieldset>
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lname"
                        className="input"
                        value={lastName}
                        onChange={e => onChange(e)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="number"
                        name="mobile"
                        id="mobile"
                        className="input"
                        value={mobile}
                        onChange={e => onChange(e)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="msg">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        id="msg"
                        className="input textarea"
                        value={message}
                        onChange={e => onChange(e)}
                    />
                </fieldset>
                <button className="btn btn--block btn--rounded btn--primary">Submit Now!</button>
            </form>
        </div>
    )
}

export default InquiryForm
