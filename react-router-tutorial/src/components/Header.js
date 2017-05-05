import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
    {children}
  </Link>
)
// context는 React서 전역적으로 사용할 수 있는 객체이다.
// class 형태의 컴포넌트의 경우는 this.context.router 라고 사용하면 되고
// 함수형 컴포넌트의 경우엔, 두 번째 파라미터로 context를 받아서 사용하면 된다.
const Header = (props, context) => {
  const { router } = context;
  return (
    <div>
      <div className="logo">
        Yujin
      </div>
      <div className="menu">
        <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
        <MenuItem to={'/about'} active={router.isActive('/about')}>소개</MenuItem>
        <MenuItem to={'/post'} active={router.isActive('/post')}>포스트</MenuItem>
      </div>
    </div>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object
}
export default Header;
