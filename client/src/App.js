import React, { useState } from 'react';
import axios from 'axios';
import useDarkMode from 'use-dark-mode';
import './App.css';
import Card from './Components/Card';
import DarkModeToggle from './Components/DarkModeToggle';
import Switch from './Components/Switch';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players').then((response) => {
            console.log(response.data);
            this.setState({
                players: response.data,
            });
        });
    }
    //Built a switch to toggle darkMode

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Advanced React</h1>
                    {/* Displaying of said Switch in the header area */}
                    <DarkModeToggle />
                </header>
                <div>
                    <Card players={this.state.players} />
                </div>
            </div>
        );
    }
}

export default App;
