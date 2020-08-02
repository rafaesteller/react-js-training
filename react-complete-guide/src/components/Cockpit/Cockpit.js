import React, { useEffect, useRef } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(()=> {
      console.log('[Cockpit.js] - useEffect')
      // const timer = setTimeout(()=>{
      //   console.log('[Cockpit.js] something happens after 1 second')
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        //clearTimeout(timer);
        console.log('[Cockpit.js] - cleanup work in useEffect')
      }
    }, [])

    useEffect(()=> {
      console.log('[Cockpit.js] - 2nd useEffect')     
      return () => {
        console.log('[Cockpit.js] - cleanup work in 2nd useEffect')
      }
    })


    const assignedClasses = [];    
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red
    }
    
    if( props.personsLength <= 2) {
      assignedClasses.push (classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit} >        
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass} 
          onClick={props.clicked}
          ref={toggleBtnRef}>
          Toggle Persons
        </button>
      </div>)
}

export default React.memo(cockpit);