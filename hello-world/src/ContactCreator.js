import React from 'react';
import Contacts from './Contacts';
class ContactCreator extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        phone: ""
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) { // JavaScript의 Event 인터페이스
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: "",
      phone: ""
    });
  }
  render() {
    return (
      <div>
        <p>
          <input type="text" name="name" placeholder="name"
          value={this.state.name} onChange={this.handleChange}/>
          <input type="text" name="phone" placeholder="phone"
          value={this.state.phone} onChange={this.handleChange}/>
          <button>Insert</button>
        </p>
      </div>
    );
  }
}
