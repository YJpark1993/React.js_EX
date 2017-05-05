import React from 'react';

class ContactInfo extends React.Component {
  // 사용자가 list의 데이터를 클릭했을때
  handleClick() {
    //this.props.contactKey 는 컴포넌트의 고유 key 이다.
    this.props.onSelect(this.props.contactKey);
  }
  //컴포넌트를 다시 렌더링 할 지 말지 정의해준다
  shouldComponentUpdate(nextProps, nextState) {
    // return nextProps.id !== this.props.id;
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }
  render() {
      // getStyle이라는 메소드에서 isSelect가 parm
      let getStyle = isSelect => {
        if(!isSelect) return ;

        let style = {
          fontWeight: 'bold',
          backgroundColor: '#4efcd8'
        };

        return style;
      };

      return (
      <li style={getStyle(this.props.isSelected)}
        onClick={this.handleClick.bind(this)}>
        {this.props.name} {this.props.phone}
      </li>
    );
  }
}
export default ContactInfo;
