// 리액트에서 event.target.value를 쓰는 이유 (드디어.. 드디어..!!)
// 우리가 event를 쓰려고 하는 이유는,
// 사용자가 어떤 값을 input값에 넣었는지 알고, 그 값을 가져오고 싶어서인데,
// react 자체에 혹은 브라우저 자체에서 event라는 객체를 사용할 수 있게 해줍니다.
// 언제? 우리가 "함수"를 사용할 때! 함수에 매개변수로 event를 넣으면 바로 사용할 수 있음
// 이벤트 객체를 살펴보면, event에 target이라는 필드 있습니다.
// 이 target은 이벤트가 일어나는 dom요소를 가르키는데, (=input)
// 그 안에 value라는 값을 찾아보면 거기에 사용자가 쓴 데이터가 들어있습니다
// console.log(event)로 확인해보세요

const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };


<input type="text" onChange={titleChangeHandler} />