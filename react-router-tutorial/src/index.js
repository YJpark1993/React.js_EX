import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Post from './containers/Post';
import Posts from './containers/Posts';

import './index.css';

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="post" component={Posts}>
          <Route path=":id" component={Post}/>
        </Route>
      </Route>
    </Router>,
    document.getElementById('root')
);
//Router // 우리가 설정한 경로에서 어떤 컴포넌트를 렌더링 할 지 정하는 컴포넌트
//react-router 의 주요 컴포넌트로, 라우터의 속성을 정의하고  이 내부에서 라우트 설정
//browserHistory는 HTML5의 history API를 사용하여 브라우저의 URL 변화 관리

// 이 라우트 컴포넌트에 또 다른 Route 를 넣으면 이는 부모 라우트의 서브 라우트가 된다
// Route : 라우트에서 서브라우트가 주어지지 않았을때, 즉 / 경로로 들어왔을때 보여주는 컴포넌트
