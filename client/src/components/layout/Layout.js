import React from 'react';

const Layout = props => {
    return (
        <>
            <div className="wrapper">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
