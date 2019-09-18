import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themecontext';
class Booklist extends Component {
    state = {}
    static contextType = ThemeContext;



    render() {
        const { isLightTheme, light, dark } = this.context;

        //Current theme
        const theme = isLightTheme ? light : dark;

        return (
            <div style={{ background: theme.bg, color: theme.syntax, padding: theme.padding, margin: theme.margin }} >
                <ol>
                    <li> Kite runner </li>
                    <li> Magic kingdon </li>
                </ol>

            </div>
        );
    }
}

export default Booklist;