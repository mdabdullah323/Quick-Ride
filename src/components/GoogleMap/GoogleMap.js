import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 26.032101,
      lng: 88.460716
    },
    zoom: 13
  };
 
  render() {
    return (
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={26.032101}
            lng={88.460716}
            text="PickUp Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;