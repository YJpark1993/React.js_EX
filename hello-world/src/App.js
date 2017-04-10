import React from 'react';
import logo from './logo.svg';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue) {
    this.setState({
      value: randomValue
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <RandomNumber number={this.state.value}
                        onUpdate={this.updateValue}/>
        </div>
        <div>
          <Contacts/>
        </div>
      </div>
    );
  }
}

export default App;
