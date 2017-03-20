import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      header:"This is a Header"
    };
  }

  updateHeader(text) {
    this.setState({
      header:"Header has changed"
    });
  }
  render() {
    return (
      <div>
      <h1>{this.state.header}</h1>
      <button onClick={this.updateHeader.bind(this)}>Update</button>
      </div>
    );
  }
}
export default Header;
