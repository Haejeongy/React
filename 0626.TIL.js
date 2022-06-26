// index.js 파일에 있는 app.js 와 html 파일을 연결해 주는 코드

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <App /> => html 안의 root 태그에 App 컴포넌트를 넣어주겠다.
//     </React.StrictMode>
//   ); 


// JSX 문법
// js 문법이지만 함수에 return에 소괄호 넣고 바로 html 코드를 넣으면 된다!
// className으로 class를 지정해주자

//리액트를 쓰는 이유?
// 데이터 바인딩 쉽게 할 수 있다
// 데이터 바인딩이 뭔가요?
// 외부에서 가져온 데이터를 변수로 할당해서 html 태그에 넣어 렌더링 해주는 것.
// Dom으로 해주려고 하면 document.getElementbyId().innerHTML='' ..blah blah
// but react, <tag> { 변수명,함수 등.. } </tag> 끝! 

// img, id, href 등을 넣고싶다면?
// react 에서는 img 컴포넌트를 만들어서, import 해온 변수 명을 넣어주면 된다.
// <img src={logo} /> 라고 써주기만 하면 끝! => 코드가 간결해지쥬?

// style 속성을 넣고 싶을 때?
// <div style="font-size" : 16px > 이런식으로 쓰면 안됩니다 html이랑 헷갈려요
// 객체형식으로 써줍시다
// <div style={ { color : 'blue', fontSize : '30px'} } /> ...
// => 너무 복잡! 그냥 css 파일을 만들어주거나, let postCss = { color : 'blue', fontSize : '30px'} 한 후, {postCss}