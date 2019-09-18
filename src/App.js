import React from 'react';
import './App.css';

//importing local components
import UserInfo from "./components/Booklist"
import Details from "./components/Navbar"
import ThemeContextprovider from "./contexts/themecontext"

function App() {
  return (
    <div className="App">
      <ThemeContextprovider>
        <Details />
        <UserInfo />
      </ThemeContextprovider>

    </div>
  );
}

export default App;
