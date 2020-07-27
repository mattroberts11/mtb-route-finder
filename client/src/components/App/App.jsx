import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import theme from '../../theme';

const initialState = {
  buttonDisabled: false,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Button fullWidth color="primary" variant="outlined">Find Trails</Button>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
