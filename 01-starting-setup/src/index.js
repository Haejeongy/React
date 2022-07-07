import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// ./ -> 동일한 파일 ..// 하나 밖에 있는 파일

ReactDOM.render(<App />, document.getElementById('root'));
//react dom이 <App />을 렌더링 하고 싶다는데, root라는 <div>박스에서