// <form> tag = "문서 구획"

// 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냄
// form > div > label, input 감싸고 있는 모양
// example

<form action="" method="get" class="form-example"> 
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

// 사용자가 입력한 것을 모으기
// 키보드를 칠때마다, 혹은 기본값이 바뀔때마다 콘솔에 기록한 후
// 폼이 제출 되었을 때 모아진 입력값을 가지고 새로운 객체를 만든다.

// 이벤트 리스너
// 키보드를 누를 때마다 사용자가 입력한 값들을 가져와서 어딘가에 저장하자









