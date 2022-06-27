import logo from './logo.svg'; //로고를 가져오겠다.
import './App.css'; //App.css 파일을 이 파일에 적용하겠다.
import { useState } from 'react';

function App() { 

  let [subject, useSubject] = useState(['리액트','자바스크립트','html/css']); //[a(리액트 블로그만들기 클론코딩),b(정정해주는 함수)]
  
  return (
    <div className="App">
      <div className='black-nav'>
      <div>개발 blog</div>
      </div>
      <div className='list'>
        <h3> { subject[0] }</h3> 
        <p> 6월 27일 발행 </p>
        <hr />
      </div>
      <div className='list'>
        <h3> { subject[1] }</h3> 
        <p> 6월 27일 발행 </p>
        <hr />
      </div>
      <div className='list'>
        <h3> { subject[2] }</h3> 
        <p> 6월 27일 발행 </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
