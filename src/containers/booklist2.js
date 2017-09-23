import React, { Component } from 'react';
<<<<<<< HEAD
=======

>>>>>>> 8e1546d65fb8c399ddc04b893d56831e581209fb
// to connect react and redux need react-redux which is already part of boilerplate
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// make sure the action flows through all the reducers
import { bindActionCreators } from 'redux';

// a container is a react component that has a direct connection to redux app state
// aka a 'smart component'
// usually put these into a separate directory
// in general we want the most parent component that cares about a piece of state to be a container
<<<<<<< HEAD
// to connect react and redux need react-redux which is already part of boilerplate
=======
>>>>>>> 8e1546d65fb8c399ddc04b893d56831e581209fb

class BookList extends Component {

    // map over array, create li for each item
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

<<<<<<< HEAD
// whatever is returned from here will be set as props in BookList
// glues Redux to this component
// if app state changes, our container will re-render
// and the object will be reassigned as props
=======
// get application state as arg
>>>>>>> 8e1546d65fb8c399ddc04b893d56831e581209fb
function mapStateToProps(state) {
    // whatever object is returned will show up as this.props in booklist
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the booklist container
// This provides access to whatever we pass in - here selectBook
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, results should be passed to reducers
    // This happens via the dispatch function
    // pass in the action creator, selectBook
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// react-redux function connect to export the container
// takes a function and a component and returns a container
// if state changes the container will be re-rendered
// and whatever object the function returns will be this.props in component
// Promote booklist from component to container
// Let it know about new dispatch method, selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
