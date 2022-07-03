import React from 'react';
import FancyBorder from 'react-bootstrap';

function FancyBorderView() {
    return (
        <div className="m-5">
            <FancyBorder>
                <ul>
                    <li>ani</li>
                    <li>bani</li>
                    <li>gani</li>
                </ul>
            </FancyBorder>
            <FancyBorder>
                <ul>
                    <h1>Title</h1>
                    <p> ani bani ani bani</p>
                </ul>
            </FancyBorder>
        </div>
    )
}

//export default FancyBorderView;