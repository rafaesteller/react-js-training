import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    return (
      <div className={classes.App}>
       <Cockpit showPerson={this.state.showPersons} persons={this.state.persons}/>
       <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />      
      </div>
    );
  }
}

export default App;
