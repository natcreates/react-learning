// ES6 -import particular class
// without the {} would need React.Component later
// the {} stores the class in the Component variable
import React, { Component } from 'react';

// this is an eg of a functional component
// function that can take an arg and outputs HTML
// class components are used when you need to keep a record of changes
//const SearchBar = () => {
//  return <input />;
// };

// this is an ES6 class
// which has access to all of the functionality of the r component class
class SearchBar extends Component {
    // state is a JS object that records user actions
    // each class-based component in React has a state object
    // when a change is recorded, the object is re-rendered
    // a constructor is used to initialise state. All classes have a constructor method
    constructor(props) {
        // super calls the method on the parent class, Component
        super(props);

        // initialise state
        // term here is the search-term. The property we want to record changes on
        // state assignment only happens inside constructor
        this.state = { term: ''};
    }
    // every class-based component must have a render method for JSX
    render() {
        // all HTML elements have an onchange event. Bind handler
        // return <input onChange={this.onInputChange} />;
        // this simple version requires an onInputChange(event) function to be declared below
        // below ES6 arrow function version. Where there's 1 arg initial () not needed
        // setState = update state with user input, the event.target.value
        // setting the value of a component by state = a controlled component
        // when setState is called the component re-renders with the value of the last state change
        // can use to prepopulate
        // onchange - call function with the value in the input
        return (
            <div className="search-bar">
                <input
                value = {this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        // call the callback function defined by parent
        this.props.onSearchTermChange(term);
    }
}

// make SearchBar available to other files
// ES6 export statement
export default SearchBar;
