//여러 usestate를 쓰는 방법말고 하나로 써버리는 방법이 있다!

//1. useState 변수 하나 만들기
const [userInput, setUserInput] = useState({
  enteredTitled: "",
  enteredAmount: "",
  enteredDate: "",
});

//2. 사용할 state 함수에 가서 스프레드로 userInput을 보내주고, 사용하고자 하는 usestate의 기본값을 바꿔준다
//2-1 스프레드를 사용하는 이유? 스테이트를 담은 객체를 바꾸면 안되니까!
const titleChangeHandler = (event) => {
  setUserInput(
    {...userInput, enteredTitle: event.target.value,})
};
//그리고 이것은 객체를 바꾸는 방법 
//...useInput의 enteredTitle을 event.target.value로 덮어씌우겠다 라는 뜻


//잠깐 ~!!!!!!


//동시에 수많은 상태를 업데이트 한다면, prevState라는 
//리엑트에서 제공하는 최신의 객체 상태를 익명함수로 전해주는게 더 !! 안전하다.

setUserInput((prevState) => {
   return {...prevState, enteredTitle: event.target.value};
 });
};

// form 태그의 submit 속성으로 이벤트 만들기
const submitHandler = (event) {
    event.preventDefault(); //리로드를 안되게 해주는 브라우저 내장 자바스크립트
  
    const expenseData = {
      title: enteredTitle,
      amount: eneteredAmount,
      date: new Date(enteredDate)
    }
    console.log(expenseData);
  };

//폼이 제출될 때,
//사용자가 뭔가 변화를 만들면, 페이지를 리로드 하지 않고
//expenseData 라는 변수에, 
//사용자가 입력한 값을 가져온다 => 콘솔에 찍는다
//       title: enteredTitle,
//       amount: eneteredAmount,
//       date: new Date(enteredDate)


//폼이 제출되고, 사용자가 썼던 것을 지우고 싶을 때,
//onchange 는 변경되는 입력값을 수신하는 기능
//value는 새로운 값을 다시 전달하는 기능
//value = {바꾸고 싶은 상태} 추가해주고, set 함수를 초깃값으로 바꿔준다. 

console.log(expenseData);

setEnteredTitle("");
setEnteredAmount("");
setEnteredDate("");