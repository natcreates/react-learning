import React, { Component } from 'react';

// to connect react and redux need react-redux which is already part of boilerplate
// a container is a react component that has a direct connection to redux app state
// aka a 'smart component'
// usually put these into a separate directory

export default class BookList extends Component {

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
