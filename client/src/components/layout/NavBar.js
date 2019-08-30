import React, { useEffect, useContext } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const state = useContext(Context);

    useEffect(() => {
        console.log(state);
    }, [state]);
    
    return (
        <div className="navBar">
            <Link to="/platform"                className="item item--selected">Platform</Link>
            <Link to="/design"                  className="item">Design</Link>
            <Link to="/user-registration"       className="item">User Registration</Link>
            <Link to="/admin-features"          className="item">Administration Features</Link>
            <Link to="/service-integration"     className="item">Service Integration</Link>
            <Link to="/database-management"     className="item">Database Management</Link>
            <Link to="/security"                className="item">Security</Link>
            <Link to="/app-billing"             className="item">App Billing</Link>
            <Link to="/exclusive-features"      className="item">Exclusive Features</Link>
            <Link to="/lets-build-your-app"     className="item">Let’s Build your App</Link>
        </div>
    )
}

export default NavBar
