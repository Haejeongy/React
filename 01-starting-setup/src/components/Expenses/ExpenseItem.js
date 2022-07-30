//리액트에 있는 컴포넌트는 오직 자바스크립트 함수다
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// 의사코드
// 버튼을 누를 때마다 타이틀이 바뀌게 하고싶다
// useState, 기본값 = "원래 타이틀"
// 버튼을 클릭할때 상태를 변경하는 함수 실행
// onClick시 실행되는 함수 안에, setTitle 함수 (바꾸고싶은 상태)를 넣어줌
// state는 항상 함수컴포넌트 안에 작성
// 프롭스를 변수로 바꿔준다

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [back, setBack] = useState(false);

  const clickHandler = () => {
    setTitle("Updated!");
    setBack(props.title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
