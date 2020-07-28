import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import regeneratorRuntime from 'regenerator-runtime';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
// import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import Geo from '../Geo';
import MenuAppBar from '../MenuAppBar';
import TrailsTable from '../Trails/TrailsTable';
import theme from '../../theme';
import exampleData from '../../../../example-data/route.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trailData: exampleData,
      // trailData: {},
      isLoading: true,
      showTrails: false,
      showLoc: false,
      lat: 0,
      lon: 0,
    };
    this.getTrails = this.getTrails.bind(this);
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
        this.setState({ lat: latitude, lon: longitude, showTrails: true, showLoc: true });
        // this.getTrails();
      });
    } else {
      alert('Your browser does not support geo location services.')
    }
  }

  getTrails() {
    const { lat, lon, showTrails } = this.state;
    const dataLat = lat;
    const dataLon = lon;
    const dataMaxDist = '50';
    const dataMaxRes = '25';
    const datMinLength = '';
    const dataMinStars = '';
    const dataKey = '200850665-a11fa80ae28dc7f1040554791c93730c';
    axios.get(`https://www.mtbproject.com/data/get-trails?lat=${dataLat}&lon=${dataLon}&maxDistance=${dataMaxDist}&maxResults=${dataMaxRes}&key=${dataKey}`)
      .then((res) => {
        // console.log('res.data componentDidMount', res.data);
        this.setState({ trailData: res.data, isLoading: false, showTrails: true });
      })
      .catch((err) => (console.log('Could not fetch data', err)));
  }

  render() {
    const {
      trailData, isLoading, showTrails, showLoc, lat, lon
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
                <Paper elevation={5}>
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
