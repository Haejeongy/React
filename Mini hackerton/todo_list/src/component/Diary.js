import React from "react";
import styled from "styled-components";

const DiaryCss = styled.div`
  display: flex;
  justify-content: center;
`;

function Diary() {
  return (
    <section>
      <DiaryCss>
        <div>
          <p>감사일기</p>
          <input placeholder='your journal here..'></input>
          <button>submit</button>
        </div>
      </DiaryCss>
    </section>
  );
}

export default Diary;