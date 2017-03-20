/*
JSX 안에서 JS를 표현하는 방법은
{}로 wrapping 하면 된다.

JSX 안에서 style을 설정 할때는, String 형식을 사용하지 않고
key가 camelCase인 객체를 사용한다.

JSX 안에서 주석을 작성할 때는
 { /* ... }
 또한 <div></div>안에 들어 가야한다.
*/
class Codelab extends React.Component {
  render() {
    // let은 블럭 단위의 스코프를 가진다
    let text = 'Hi I am Yujin';
    let style = {
      backgroundColor:'aqua'
    };

    return(
      //JS에서 선언한 변수를 띄우고 싶을때 {}으로 감싸준다.
      <div style={style}>{text}</div>
    );
  }
}
/*
컴포넌트에서 여러 Element를 렌더링 할 때
꼭 Container Element 안에 포함시켜줘야한다.
*/
class App extends React.Component{
  render() {
    return (
      <Codelab/>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
