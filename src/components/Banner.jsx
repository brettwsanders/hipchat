import React, { Component } from 'react';

class Banner extends Component {
    render() {
        const logo = 'HipChat';
        return (
            <header className="banner">
                <p className="logo">{logo}</p>
            </header>
        );
    }
};

export default Banner;
