const clickHandler = () => {
    console.log('CLICKED!!')
  }
<button onClick={clickHandler}></button> //O
<button onClick={clickHandler()}></button> //X

// 이벤트 핸들러 쓸 때, 왜 함수를 실행하지 않고, 변수만 넣는지?
// 만약 괄호를 추가한다면, JSX 코드가 해석될 때 함수가 시작되는데, 그건 너무 이르다!
// 일단 변수만 전달해서 리액트가 기억하게 하고, 클릭 할때마다만 ! 함수를 작동하게 한다.

// 이벤트 핸들러 함수는 handler로 끝나는 이름으로 함수를 만들기도 함
// ex) cilckHandler


// 리액트의 컴포넌트는 함수형이다. 특별한 점은 jsx 코드를 반환할 뿐!
// 함수이기때문에 누군가 호출을 해야하는데,
// 누구도 호출을 한적이 없다?!
// 컴포넌트를 사용해서 컴포넌트 함수를 인식하도록 만들었다.
// 리액트는 jsx코드를 평가 할 때 마다 컴포넌트 함수를 호출한다
// 컴포넌트는 jsx코드를 리턴한다. jsx코드가 남아있지 않을 때까지
// 돔 명령어로 번역해, 화면에 보여지는 것들을 렌더링 한다.

//리액트는 절대 반복하지 않음!
//렌더 후에는 끝.. -> 근데 화면에 보이는걸 업데이트 하고싶은데..? -> state

//리액트훅은 컴포넌트 한수 안에서 직접적으로 호출 되어야 한다
//변화하는 값을 렌더링 해줄 수 있는 state

//useState
//컴포넌트별 인스턴트를 기반으로 각 독립적인 state를 갖는다
// 의사코드
// 버튼을 누를 때마다 타이틀이 바뀌게 하고싶다
// useState, 기본값 = "원래 타이틀"
// 버튼을 클릭할때 상태를 변경하는 함수 실행
// onClick시 실행되는 함수 안에, setTitle 함수 (바꾸고싶은 상태)를 넣어줌
// state는 항상 함수컴포넌트 안에 작성
// 프롭스를 변수로 바꿔준다


// const 상수를 쓰는 이유?
// 등호를 사용해서 값을 할당하지 않는다
// 


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
  
    const clickHandler = () => {
      setTitle("Updated!");
    };
  
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>



