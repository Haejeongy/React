// function of React always need return !! for rendering

// concept of composition
// 컴포넌트 사이에서 중복되는 css 스타일이나, 요소들을
// 부모 컴포넌트로 빼주고 -> 부모 컴포넌트로 만들어서 div 대신 사용할 수 있다.
// 대신 프롭스를 내리고, 태그 사이에 {props.children}이라고 써주기
// 그럼 이 컴포넌트로 싸여진 다른 컴포넌트들은 자동적으로 children이 된다.
// CSS 부분 이해 못함 section3 40 , 10분~

// concept of JSX
// 브라우저는 JSX코드를 지원하지않음!
// react / react-dom 이 뒤에서 어떤일을 하는가?

// return (
//     <div>
//         <h2>let's go</h2>
//         <Expenses items={expenses} />
//     </div>
// );

// 이 html 코드를 내장 react dependency가 바꿔준다
// return React.createElement(
//     'div',{}
//     React.createElement('h2',{}, "let's go"),
//     React.createElement(Expenses, { items:expenses})
// );

// 이것이 wrapper을 꼭 가져야 하는 이유 !!

// 컴포넌트 저장하기

// syntax
// arrow function 
// 상수형으로 선언 
// const App = () => {
//     return 
// }
