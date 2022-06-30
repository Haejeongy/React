/* eslint-disable */ //warning을 보지 않겠다! 하는 코드

import logo from './logo.svg'; //로고를 가져오겠다.
import './App.css'; //App.css 파일을 이 파일에 적용하겠다.
import { useState } from 'react';

let [like, setLiket] = useState(0);

function App() { 
  return (
    <div className="App">
      <div className='black-nav'>개발 blog
      </div>
      <div className='list'>
        <h3>react <button onClick={ console.log(1) }>👍</button></h3>
        </div>
      <hr />
      <div className='list'>js</div>
      <hr />
    </div>
  );
}



export default App;



