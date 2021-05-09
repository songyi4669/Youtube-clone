import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <i className="header-logo fab fa-youtube"></i>
                <span>Songtube</span>
                <form action="" className="search">
                    <input type="text" className="search-input" placeholder="Search" />
                    <button className="search-button">
                    <i className="fas fa-search"></i>
                        </button>
                </form>
            </header>
        );
    }
}

export default Header;