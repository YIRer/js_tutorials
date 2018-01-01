import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps={
        onNewReicpe(){}
    }
    static propTypes = {
        onNewReicpe:PropTypes.func
    }
    render() {
        return (
            <header>
                <h2>
                    <a>
                        Recipe App
                    </a>
                </h2>
                <nav>
                    <li><a onClick={this.props.onNewReicpe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>       
        );
    }
}

export default Navbar;