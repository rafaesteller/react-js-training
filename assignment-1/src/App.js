import React, { Component } from 'react';
import './App.css';
import Userinput from './components/Userinput'
import Useroutput from './components/Useroutput'
import User from './components/User'

class App extends Component {

    state = {
        'name': 'Test'
    };

    nameChangedHandler = (event) => {
        this.setState (
            {'name': event.target.value }                           )
    };

    render() {
        return (
            <div className="App">
                <h1>First react assignment</h1>

                <Userinput
                    name={this.state.name}
                    changed={this.nameChangedHandler}/>

                <Useroutput name={this.state.name}/>
            </div>
        );
    };
};

export default App;

