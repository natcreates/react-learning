import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  // prevent form from submitting when enter hit
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    // reset search input to empty
    this.setState({ term: ''});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input onChange={this.onInputChange}
          placeholder="Get a 5 day forecast in your favourite cities"
          value={this.state.term}
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// make sure actions flow through to reducers
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchWeather}, dispatch);
}

// null here as the container doesn't need to know about redux store state
export default connect(null, mapDispatchToProps)(SearchBar);
