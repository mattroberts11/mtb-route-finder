import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import regeneratorRuntime from 'regenerator-runtime';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MenuAppBar from '../MenuAppBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import qs from 'qs';
import axios from 'axios';
import Trails from '../Trails';
import TrailsTable from '../Trails/TrailsTable';
import SimpleTable from '../Trails/SimpleTable';
import theme from '../../theme';
import exampleData from '../../../../example-data/route.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // trailData: exampleData,
      trailData: {},
      isLoading: true,
    };
    // this.fetchTrails = this.fetchTrails.bind(this);
  }

  componentDidMount() {
    const apiURL = 'https://www.mtbproject.com/data/get-trails';
    const dataLat = '40.0274';
    const dataLon = '-105.2519';
    const dataMaxDist = '50';
    const dataMaxRes = '25';
    const datMinLength = '';
    const dataMinStars = '';
    const dataKey = '200850665-a11fa80ae28dc7f1040554791c93730c';
    axios.get(`https://www.mtbproject.com/data/get-trails?lat=${dataLat}&lon=${dataLon}&maxDistance=${dataMaxDist}&maxResults=${dataMaxRes}&key=${dataKey}`)
      .then((res) => {
        // console.log('res.data componentDidMount', res.data);
        this.setState({ trailData: res.data, isLoading: false });
      })
      .catch((err) => (console.log('Could not fetch data', err)));
  }

  render() {
    const { trailData, isLoading } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <MenuAppBar />
          <Typography variant="h4" gutterBottom>Welcome to Mountain Bike Trail Finder</Typography>
          <Typography variant="body1" gutterBottom>Click the button below to find trails near you.</Typography>
          <Box m={10} />
          <Button fullWidth color="primary" variant="outlined">Find Trails Near Me</Button>
          <Box m={10} />
          { !isLoading ? (
            <TrailsTable trailData={trailData} />
          ) : (<LinearProgress color="secondary" />)}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
