import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {id: 1, 'name': 'sdsd', 'age': '29'},
      {id:2,'name': 'Ash', 'age': '19'},
      {id: 3, 'name': 'Jon', 'age': '59'},
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState (
        {
          persons: persons
        }
    )
  };

  togglePersonsHandler = () => {    
    this.setState( {showPersons: !this.state.showPersons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }       
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      } 

    }

    const classes = [];
    if(this.state.persons.length <= 2) {
        classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }
    
    return (
      <StyleRoot>
      <div className="App">
       <h1>I am react</h1>
       <p class={classes.join(' ')}>Some poeple here</p>
        <button style={style} 
        onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}      
      </div>
      </StyleRoot>
    );

  };
};

export default Radium(App);
