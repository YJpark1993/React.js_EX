/*
유동적인 데이터
JSX 내부에 {this.state.stateName};

초기값 설정이 필수, 생성자에서
this.state = {} 으로 설정

값을 수정 할 때에는 this.setState({...})
랜더링 된 다음엔 this.state = 로 값을 수정 하면 안된다.
*/

class Counter extends React.Component {
  // props는 Counter class 가 만들어질때 전달 받을 매개변수
  constructor(props) {
    //React.Component의 생성자 호출
    super(props);
    this.state = {
      value:0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      value:this.state.value + 1
    });
    /* 매우 안좋은 방법
     this.state.value = this.state.value + 1; // 애초에 작동도 안함
     this.forceUpdate();
    */
  }
  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);
