import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: []
    }
  }

  componentDidMount() {

  }

  render () {
    return (<div>
      <h1>Find a mountain bike trail near you:</h1>
      <App />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));