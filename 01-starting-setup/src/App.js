import ExpenseItem from './ExpenseItems';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;

//컴포넌트는 마치 html 코드처럼 사용 할 수 있다.
//1. js파일을 생성한다.
//2. 자바스크립트 함수로 컴포넌트를 만들고 export
//3. 넣어주고 싶은 파일에 가서 import하고,
//4. html 코드처럼 넣어주기 