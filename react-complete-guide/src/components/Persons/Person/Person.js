import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClassFC from '../../../hoc/withClassFC';
import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); 
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render( ) {
    console.log('[Person.js] rendering...');
  
    return (
      <Fragment>      
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text"
         onChange={this.props.changed} 
         value={this.props.name}
         ref={this.inputElementRef} />      
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClassFC(Person, classes.Person);
