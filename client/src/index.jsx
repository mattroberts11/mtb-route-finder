import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Find a mountain bike trail near you:</h1>
        <Form />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
