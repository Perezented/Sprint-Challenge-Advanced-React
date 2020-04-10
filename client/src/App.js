import React from 'react';
import axios from 'axios';

import './App.css';
import Card from './Components/Card';
import Switch from './Components/Switch';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
            check: false,
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/players').then((response) => {
            console.log(response.data);
            this.setState({
                players: response.data,
                check: false,
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
                    <Switch />
                </header>
                <section>
                    {/* A div to hold the players at some point */}
                    <Card players={this.state.players} />
                </section>
            </div>
        );
    }
}

export default App;
