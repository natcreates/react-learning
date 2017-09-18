import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // when app first renders, will call the action creators
    // state is initially null so need to deal with this
    if(!this.props.book) {
      return <div>Select a book to get started</div>;
    }
    return (
      <div>
        <h3>{this.props.book.title}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
    // whatever object is returned will show up as this.props in booklist
    return {
        book: state.activeBook
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ activeBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
