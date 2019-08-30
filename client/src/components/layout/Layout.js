import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

const Layout = props => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <NavBar />
                <div className="content">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
