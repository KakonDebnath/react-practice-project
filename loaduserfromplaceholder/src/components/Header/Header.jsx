import React from 'react';

const h1Style = {
    textAlign: "center",
    fontSize: "40px",
    padding: "20px 0"
}

const Header = () => {
    return (
        <div>
            <h1 style={h1Style}>Welcome To My React Project</h1>
        </div>
    );
};

export default Header;