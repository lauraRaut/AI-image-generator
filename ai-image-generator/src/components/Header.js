import * as React from 'react';

const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h2>Open AI Image Generator</h2>
            </div>
            <div className="nav-links">
                <ul>

                    <a href="https://beta.omenai.com/docs" target="_blank" rel="noreferrer"
                    >Open API Docs</a>

                </ul>
            </div>
        </div>
    )
}
export default Header