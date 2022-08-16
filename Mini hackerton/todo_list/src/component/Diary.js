import React, { useState } from "react";
import styled from "styled-components";
import dummyData from "../static/dummyData";
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
  const [subject, setSubject] = useState("");
  const [diaries, setDiary] = useState(dummyData);
  const [msg, setMsg] = useState("");

  const handleButtonClick = (event) => {
    const diary = {
      id: 1,
      subject: subject,
      picture: "https://randomuser.me/api/portraits/men/98.jpg",
      content: msg,
      createdAt: new Date().toLocaleDateString("ko-KR"),
      updatedAt: new Date().toLocaleDateString("ko-KR"),
    };
    const newDiaries = [diary, ...diaries];
    setDiary(newDiaries);
  };
  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  return (
    <section>
      <DiaryCss>
        <div className="diary_container">
          <div className="diary_wrapper">
            <div className="diary_uploadFile">
              <img>내가 올린 이미지</img>
              <div className="diary_summit">
                <input type="file"></input>
              </div>
            </div>
            <div className="diary_inputcontainer">
              <div className="diary_inputwrapper">
                <div className="diary_forminput">
                  <input value={subject} placeholder="subject of today"></input>
                  <textarea
                    onChange={handleChangeMsg}
                    placeholder="How's your day?"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="diaryButton" onClick={handleButtonClick}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </DiaryCss>
      <div>
        <ul>
          나의 오늘은...
          <DiaryList />
        </ul>
      </div>
    </section>
  );
}

export default Diary;
