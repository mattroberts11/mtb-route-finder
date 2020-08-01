/* eslint-disable no-nested-ternary */
import React from 'react';
import { geolocated } from 'react-geolocated';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

class Geo extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <Typography variant="body1">Your browser does not support Geolocation</Typography>
    ) : !this.props.isGeolocationEnabled ? (
      <Typography variant="body1">Geolocation is not enabled</Typography>
    ) : this.props.coords ? (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={5}>
            <Typography variant="body1" align="center" color="secondary">Your Location:</Typography>
            <Typography variant="body1" align="center" color="primary">
              Latitude:
              {this.props.coords.latitude}
            </Typography>
            <Typography variant="body1" align="center" color="primary">
              Longitude:
              {this.props.coords.longitude}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    ) : (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Typography variant="body1" align="center" color="primary">Getting the location data&hellip;</Typography>
            <CircularProgress
              style={{ marginLeft: '50%' }}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geo);
