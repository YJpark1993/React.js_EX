import React from 'react';
import PostLinks from '../components/PostLinks';
import BigText from '../components/BigText';

const Posts = ({children}) => {
  return (
    <div>
      <BigText>포스트</BigText>
      <PostLinks/>
      {children}
    </div>
  )
}

export default Posts;
