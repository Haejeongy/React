// onClick = {클릭될 때 실행할 함수}
// Style = 'cursor:pointer;' // 올렸을 때 손가락 모양으로 바꿔주겠다.
// 리액트 대 원칙 : immutable data
// 깊은 복사 [...spread] = 새로운 배열 만듦
// 얕은 복사 = 값을 공유
// <Array, Object state 데이터 수정 방법>
// 1. 기존 state 카피본 만들고 -> newArray = [...subject] // state 는 바로 건들지 않고, deep copy 로 건드려야 한다!
// 2. 카피본에 수정사항 반영 newArray = newArray[1] //혹은 "드림코딩"
// 3. 변경함수에() 집어넣기


//modal 창으로 띄우는 상세 페이지
//연속 tag는 쓸 수 없음! -> 하나의 태그에는 하나의 쓰임

//html 한 단어로 줄여서 쓰기 = component 문법
//component 만드는 방법
//html을 치환하는 이름의 함수를 만들어준다
//return 에 원하는 html 태그를 넣어준다
// <함수 이름 /> -> 컴포넌트 완성 ~!

//컴포넌트 만들 때 주의할 점
// 1. 대문자로 시작하기
// 2. return 소괄호 안에 태그는 무조건 하나!
// 2-1. 의미 없는 div를 쓰기 싫다면 <>요기 안에 넣어주기</>

//컴포넌트 만드는 기준
//반복적으로 나오는 html 덩어리들
//자주 변경되는 html ui 들 -> 재렌더링이 자주 일어나는 것
//다른 페이지를 만들 때


//컴포넌트를 많이 만들면
//state 쓸 때 복잡해짐 -> 스코핑 때문에 변수 사용에 문제가 있음
//그래서 props 를 사용한다.