import "./styles.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const BlueButton = styled.button`
    background-color: blue;
    color: white;
    &:hover{ 
        background-color : skyblue;
        color : blue
    }
    `;

const GlobalStyle = createGlobalStyle`
	button {
	padding : 5px;
    margin : 2px;
    border-radius : 5px;
    color : white;
	}`;

export default function App() {
    return (
        <>
                <GlobalStyle />
        <div>
        <button id="practice">Practice!</button>
        <BlueButton>button</BlueButton> //내가 변수로 넣어줘서 안바뀐거임
        </div>
        </>
    );
}

// 호버 넣는 방법
// &:hover{ 
//     background-color : skyblue;
//     color : blue


//전역 css 적용하기
// const GlobalStyle = createGlobalStyle`