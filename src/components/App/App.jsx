import React, { Component } from 'react';

import bp from 'body-parser';
import axios from 'axios';

import { ThemeProvider } from '@material-ui/core/styles';

import {
  Typography,
  Container,
  Paper,
  Grid,
  Box,
  Button,
} from '@material-ui/core';

import theme from '../../theme';

import exampleData from '../../../example-data/routes500.json';

import Loader from '../Loader';
import Geo from '../Geo';
import MenuAppBar from '../MenuAppBar';
import TrailsTable from '../Trails/TrailsTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trailData: exampleData,
      // trailData: {},
      isLoading: false,
      showTrails: false,
      showLoc: false,
      lat: 0,
      lon: 0,
      addToFav: []
    };
    this.getTrails = this.getTrails.bind(this);
    this.saveTrailToUser = this.saveTrailToUser.bind(this);
    this.handleTrailsLoaded = this.handleTrailsLoaded.bind(this);
    this.getLocationOnClick = this.getLocationOnClick.bind(this);
  }

  componentDidMount() {
    // const apiURL = 'https://www.mtbproject.com/data/get-trails';
    // const dataLat = '40.0274';
    // const dataLon = '-105.2519';
    // const dataMaxDist = '50';
    // const dataMaxRes = '25';
    // const datMinLength = '';
    // const dataMinStars = '';
    // const dataKey = '200850665-a11fa80ae28dc7f1040554791c93730c';
    // axios.get(`https://www.mtbproject.com/data/get-trails?lat=${dataLat}&lon=${dataLon}&maxDistance=${dataMaxDist}&maxResults=${dataMaxRes}&key=${dataKey}`)
    //   .then((res) => {
    //     // console.log('res.data componentDidMount', res.data);
    //     this.setState({ trailData: res.data, isLoading: false });
    //   })
    //   .catch((err) => (console.log('Could not fetch data', err)));
    // this.setState({ showTrails: true });
  }

  componentDidUpdate() {
    this.state.isLoading = false;
  }

  // eslint-disable-next-line class-methods-use-this
  getLocationOnClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log('Latitude is :', position.coords.latitude);
        // console.log('Longitude is :', position.coords.longitude);
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const latShort = latitude.toFixed(4);
        const lonShort = longitude.toFixed(4);
        this.setState({
          lat: latShort,
          lon: lonShort,
          showTrails: true,
          showLoc: true,
          isLoading: true,
        });
        // this.getTrails();
      });
    } else {
      alert('Your browser does not support geo location services.');
    }
  }

  getTrails() {
    const { lat, lon, showTrails } = this.state;
    const dataLat = lat;
    const dataLon = lon;
    const dataMaxDist = '50';
    const dataMaxRes = '25';
    const datMinLength = ''; // for future release
    const dataMinStars = ''; // for future release
    const dataKey = '200850665-a11fa80ae28dc7f1040554791c93730c';
    axios.get(`https://www.mtbproject.com/data/get-trails?lat=${dataLat}&lon=${dataLon}&maxDistance=${dataMaxDist}&maxResults=${dataMaxRes}&key=${dataKey}`)
      .then((res) => {
        // console.log('res.data componentDidMount', res.data);
        this.setState({
          trailData: res.data,
          isLoading: false,
          showTrails: true,
        });
      })
      .catch((err) => (console.log('Could not fetch data', err)));
  }

  handleTrailsLoaded() {
    this.setState({ showTrails: true });
  }

  // eslint-disable-next-line class-methods-use-this
  saveTrailToUser() {
    axios.post('/api/trails/save')
      .then((data) => bp.json(data))
      .then(() => res.status(201).send('Trail added to user'))
      .catch((err) => console.error('Could not add trail', err));
  }

  render() {
    const {
      trailData, isLoading, showTrails, showLoc, lat, lon,
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <MenuAppBar />
          <Typography variant="h4" gutterBottom>Welcome to Mountain Bike Trail Finder</Typography>
          <Typography variant="body1" gutterBottom>Click the button below to find trails near you.</Typography>
          <Box m={5} />
          <Button fullWidth color="primary" variant="outlined" onClick={this.getLocationOnClick}>Find Trails Near Me</Button>
          <Box m={5} />
          { showLoc ? (
            <Grid container spacing={3} m={5}>
              <Grid item xs={12}>
                <Paper elevation={5} id="map1">
                  <Typography variant="body1" align="center" color="secondary">Your Location:</Typography>
                  <Typography variant="body1" align="center" color="primary">
                    Latitude:&nbsp;
                    {lat}
                  </Typography>
                  <Typography variant="body1" align="center" color="primary">
                    Longitude:&nbsp;
                    {lon}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          ) : (
            null
          )}
          { showTrails ? (
            <TrailsTable trailData={trailData} />
          ) : (
            null
          )}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

// { !isLoading && showTrails ? (
//   <TrailsTable trailData={trailData} />
// ) : (<LinearProgress color="secondary" />)}
