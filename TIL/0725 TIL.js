const clickHandler = () => {
    console.log('CLICKED!!')
  }
<button onClick={clickHandler}></button> //O
<button onClick={clickHandler()}></button> //X

// 이벤트 핸들러 쓸 때, 왜 함수를 실행하지 않고, 변수만 넣는지?
// 만약 괄호를 추가한다면, JSX 코드가 해석될 때 함수가 시작되는데, 그건 너무 이르다!
// 일단 변수만 전달해서 리액트가 기억하게 하고,
