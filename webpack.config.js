// webpack을 불러오는 것, require 명령어를 통해
var webpack = require('webpack');

// 이 객체를 모듈로 내보내겠다는 의미
// 다른 객체에서 이 모듈을 불러올 수 있음
module.exports = {
  // webpack의 핵심 기능은 require을 client side에서도 사용 가능하고 js 파일을 합칠 수 있다.
  entry: {
    index :['./src/index.js','./src/components/App.js']},

  // 합친 파일들을 public 폴더에 bundle.js 이름으로 저장 한다.
  output: {
    path:__dirname + '/public/',
    filename:'bundle.js'
  },

  // 개발 서버의 설정
  devServer: {
    hot:true, // 파일이 수정 될 때마다 리로딩
    inline:true,
    host:'0.0.0.0',
    port:4000,
    contentBase:__dirname + '/public/' // index file의 위치
  },

  module: {
    // 여러 가지 모듈을 사용해 변환 가능
    loaders: [
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query: {
          cacheDirectory:true,
          presets:['es2015','react']
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
