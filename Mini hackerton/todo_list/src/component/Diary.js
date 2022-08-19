import React, { useState } from "react";
import styled from "styled-components";
import DummyData from "../static/DummyData";
import DiaryList from "../component/DiaryList";

const DiaryCss = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: center;

  .title {
    background-color: ;
  }
  .diaryButton {
    display: flex;
    padding: 5px;
    color: blue;
    background-color: skyblue;
    border-radius: 20%;
  }
`;

function Diary() {

  const [diaryInput, setDiaryInput] = useState("")
  

  return (
    <section>
      <DiaryCss>
        <div className="diary_container">
          <div className="diary_wrapper">
            <div className="diary_uploadFile">
              <p>내가 올린 이미지</p>
              <div className="diary_summit">
                <input type="file"></input>
              </div>
            </div>
            <div className="diary_inputcontainer">
              <div className="diary_inputwrapper">
                <div className="diary_forminput">
                  <input placeholder="subject of today"></input>
                  <textarea
                    placeholder="How's your day?"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="diaryButton">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </DiaryCss>
      <div>
        <ul>
          오늘의 감사일기
          <li>
          </li>

          <DiaryList />
        </ul>
      </div>
    </section>
  );
}

export default Diary;
