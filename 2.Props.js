/*
컴포넌트 내부의 Immutable Data
JSX 내부에 {this.props.propsName}
컴포넌트를 사용 할 때 < > 괄호 안에
propsName = "value"
this.props.children 은 기본적으로 갖고 있는 props로서
 <Cpnt> 여기에 있는 값이 들어간다 </Cptn>
*/
class Codelab extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Codelab.propTypes = {
  name:React.PropTypes.string,
  number:React.PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name:'Unknown'
};

class App extends React.Component{
  render() {
    return (
      //<Codelab name="Yujin">이 사이에 있는거</Codelab>
      //밑에서 받아오게 된다 (App 클래스에서)
      <Codelab name={this.props.name} number={this.props.number}>{this.props.children}</Codelab>
    );
  }
}

ReactDOM.render(<App number={5}>I am your children</App>,document.getElementById('root'));
