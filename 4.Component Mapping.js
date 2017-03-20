/*
비슷한 코드를 반복해서 렌더링하는 방법

map() 메소드는 파라미터로 전달 된 함수를 통하여 배열내의
각 요소를 처리해서 그 결과로 새로운 배열을 생성한다.

arr.map(callback, [thisArg])
callback : 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가진다
 - currentValue : 현재 처리되고 있는 요소
 - index : 현재 처리되고 있는 요소의 index 값
 - array : 메소드가 불려진 배열
thisArg : (Option) callback 함수 내부에서 사용 할 this 값을 설정
*/


// 함수가 파라미터가 하나 이고 실행할 줄도 한 줄 일때
let one = a => console.log(a);

let two = (a,b) => console.log(a,b);

let three = (c,d) => {
  console.log(c);
  console.log(d);
};

let four = () => {
  console.log('no params');
};

// ES6 -> ES5
var one = function one(a) {
  return console.log(a);
};

var two = function two(a, b) {
  return console.log(a, b);
};

var three = function three(c, d) {
  console.log(c);
  console.log(d);
};

var four = function four() {
  console.log('no params');
};



class ContactInfo extends React.Component {
  render() {
    return (
      <div>{this.props.contact.name}
      {this.props.contact.phone}</div>
    );
  };
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name:'Abet',phone:'010-0000-0001'},
        {name:'Babo',phone:'010-0000-0002'},
        {name:'Crow',phone:'010-0000-0003'},
        {name:'Dame',phone:'010-0000-0004'}
      ]
    }
  }
  render() {
    // mapToComponent 함수에 data라는 파라미터를 받는다는 뜻
    const mapToComponent = (data) => {
      // contact : data 배열의 각 요소, i : data 배열의 각 index
      return data.map((contact,i) => {
        return (<ContactInfo contact = {contact} key={i}/>)
      });
    };
    return (
      // mapToComponent 함수 호출
      <div>
        {mapToComponent(this.state.contactData)}
        <div>Abet 010-0000-0001</div>
        <div>Babo 010-0000-0002</div>
        <div>Crow 010-0000-0003</div>
        <div>Dame 010-0000-0004</div>
       </div>
    );
  };
}

class App extends React.Component {
  render() {
    return (
      <Contact/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);
