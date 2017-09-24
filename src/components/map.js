import React, {Component} from 'react';

class GoogleMap extends Component {
  // called automatically after component has been rendered to screen
  // tell google maps where to render - what node to hook onto
  // common method of integrating third party libraries
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  // ref is a React way of referring to a particular rendered element
  // anywhere else is the component we can now refer to this.refs.map
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
