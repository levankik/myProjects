import React from 'react';
import './scss/FancyBorder.scss'

function FancyBorder({children}) {
    return (
        <div className="fancy-border">
            <div className="inner-div">
                {children}
            </div>

        </div>
    )
}

export default FancyBorder;