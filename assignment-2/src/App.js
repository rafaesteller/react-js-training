import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent';

class App extends Component {

    state = {
        'userInput': ''
    };

    inputChangedHandler = (event) => {        
        this.setState (
            {'userInput': event.target.value }                           )
    };

    render() {
        return (
            <div className="App">
                <h1>Second react assignment</h1>

                <input 
                type="text" 
                onChange={this.inputChangedHandler} 
                value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <ValidationComponent inputLength={this.state.userInput.length}/>
            </div>
        );
    };
};

export default App;

