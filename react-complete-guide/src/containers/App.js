import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import withClassFC from '../hoc/withClassFC';
import Aux from '../hoc/Aux'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }


  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }
  
  //Will be deprecated? Preparing your state correctly
  componentWillMount() {
    console.log('[App.js] componentWillMount')

  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }
  
   state = {
    persons: [
      {id: 1, 'name': 'sdsd', 'age': '29'},
      {id:2,'name': 'Ash', 'age': '19'},
      {id: 3, 'name': 'Jon', 'age': '59'},
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;

  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')

  }

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

    this.setState ( (prevState) =>
        { return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1
        }
          
        }
    )
  };

  togglePersonsHandler = () => {    
    console.log('hits handler')

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  
  render() {    
    console.log('[App.js} render');
    let persons = null;
  
    if (this.state.showPersons) {
      persons =  <Persons 
      persons = {this.state.persons}
      clicked = {this.deletePersonHandler}
      changed = {this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false});}}>Remove cockpit</button>
       {this.state.showCockpit &&
       <Cockpit 
        title={this.props.appTitle} 
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length} 
        clicked={this.togglePersonsHandler}/>
      }
       {persons}
      </Aux>
    );
  }
}

export default withClassFC(App, classes.App);
