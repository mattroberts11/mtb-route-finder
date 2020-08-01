import React from 'react';
import GoogleMapReact from 'google-map-react';
import Paper from '@material-ui/core/Paper';

const Map = () => {

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAjhnVmJZdbbO0MALPGylfSsKlj79f2L8Y' }}
        defaultCenter={[39.9737, -105.1394]}
        defaultZoom={9}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <Paper
          lat={39.9737}
          lng={-105.1394}
          text="My Location"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
