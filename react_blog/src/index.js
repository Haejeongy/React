import React from 'react'; //react core function 기능이 들어있는 코드 npm으로 깔아줄 때 자동으로 깔립니다.
import ReactDOM from 'react-dom/client'; //리액트랑 돔을 연결해주는 코드
import './index.css'; //기본적인 css 파일을 가져옵니다
import App from './App'; //App 파일을 가지고 옵니다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);


