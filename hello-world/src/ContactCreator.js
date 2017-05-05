import React from 'react';
class ContactCreator extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        phone: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }
  // 사용자가 textbox에 글자를 쓰면 즉각적으로 보여주기위해서
  handleChange(e) { // JavaScript의 Event 인터페이스
    var nextState = {}; // Map으로 선언
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  // 사용자가 button을 클릭하면 데이터를 넣고 textbox 초기화
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
          <button onClick={this.handleClick}>Insert</button>
        </p>
      </div>
    );
  }
}

export default ContactCreator;
