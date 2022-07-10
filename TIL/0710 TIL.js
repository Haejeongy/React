//section 2, ~36

//컴포넌트는 마치 html 코드처럼 사용 할 수 있다.
//1. js파일을 생성한다.
//2. 자바스크립트 함수로 컴포넌트를 만들고 export
//3. 넣어주고 싶은 파일에 가서 import하고,
//4. html 코드처럼 넣어주기

//컴포넌트 reuse하는 방법
// 1. 컴포넌트 복붙하기 -> 하드코딩
// 2. 함수에 다른 매개변수를 넣어 다른 값을 얻는것처럼,
// 2-1. 대표 컴포넌트 안에 변수에 데이터를 넣고
// 2-2. 해당 컴포넌트 함수 안에 props 매개변수를 넣어주고
// 2-3. 그 데이터를 넣어줘야 하는 태그 안에 {props._변수이름_}을 넣어준다.

//캘린더처럼 만들기 (date에 toLocaleString 매소드 적용하기)
//인간이 읽을 수 있는 형태로 날짜를 출력함
//toLocaleString('언어-국가',{month:'long'});
//toLocaleString('en-US',{month:'2-digit'});
//props.date.getFullYear();