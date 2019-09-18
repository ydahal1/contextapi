import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themecontext';

class Navbar extends Component {
    static contextType = ThemeContext

    render() {

        //destructuring to get from context
        const { isLightTheme, light, dark } = this.context;

        //Evaluating what theme to display
        const theme = isLightTheme ? light : dark


        return (
            <nav style={{ background: theme.ui, color: theme.syntax, padding: theme.padding, margin: theme.margin }}>
                <h1> Context app</h1>
            </nav>
        );
    }
}

export default Navbar;