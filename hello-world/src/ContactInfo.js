import React from 'react';
import App from './App';

class ContactInfo extends React.Component {
  render() {
    return (
      <li>{this.props.name} {this.props.phone}</li>
    );
  }
}
export default App;
