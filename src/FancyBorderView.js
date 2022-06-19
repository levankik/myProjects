import React from 'react';

function FancyBorderView() {
    return (
        <div className="m-5">
            <FancyBorder>
                <ul>
                    <li>aaaaaaa</li>
                    <li>bbbbbbb</li>
                    <li>bbbbbbb</li>
                    <li>bbbbbbb</li>
                </ul>
            </FancyBorder>
            <FancyBorder>
                <ul>
                    <h1>Title</h1>
                    <p>cccccccc ccccccc cccccccc ccccccccc ccccccc</p>
                </ul>
            </FancyBorder>
        </div>
    )
}

export default FancyBorderView;