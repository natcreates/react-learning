import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

// referencing structure of data returned from API
// cityData is one box in an array
// note that key needs to be on outermost element of list item
  renderWeather(cityData) {
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({weather}) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
