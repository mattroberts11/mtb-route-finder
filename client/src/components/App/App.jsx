import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import regeneratorRuntime from 'regenerator-runtime';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MenuAppBar from '../MenuAppBar';
import Box from '@material-ui/core/Box';
import Trails from '../Trails';
import TrailsTable from '../Trails/TrailsTable';
import SimpleTable from '../Trails/SimpleTable';
import theme from '../../theme';
import exampleData from '../../../../example-data/route.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDisabled: false,
      isFetching: false,
      trailData: exampleData,
    };
    this.fetchTrails = this.fetchTrails.bind(this);
  }

  componentDidMount() {
    // this.fetchTrails();
  }

  async fetchTrails() {
    try {
      this.setState({ isFetching: true });
      const response = await fetch('http://localhost:3000/trails');
      console.log('Response:', response);
      const trails = await response.json();
      // console.log('Trails data: ', trails);
      this.setState({ trailData: trails });
    } catch (err) {
      console.log('There was an error fetching data', err);
    }
  }

  render() {
    const { trailData } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <MenuAppBar />
          <Typography variant="h4" gutterBottom>Welcome to Mountain Bike Trail Finder</Typography>
          <Typography variant="body1" gutterBottom>Click the button below to find trails near you.</Typography>
          <Button fullWidth color="primary" variant="outlined">Find Trails Near Me</Button>
          <Box m={10} />
          <TrailsTable trailData={trailData} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
