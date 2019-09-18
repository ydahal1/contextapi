import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextprovider extends Component {
    state = {
        isLightTheme: false,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee", padding: "10px", margin: "10px" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555", padding: "10px", margin: "10px" }

    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextprovider;