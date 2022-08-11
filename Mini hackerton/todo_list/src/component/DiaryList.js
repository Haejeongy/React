import React from "react";
import styled from "styled-components";

const DiaryListCss = styled.div`
  display: flex;
  justify-content: center;
`;

function DiaryList() {
  return (
    <section>
      <DiaryListCss>
        <div>
          <p>감사일기</p>
          <input placeholder='your journal here..'></input>
          <button>submit</button>
        </div>
      </DiaryListCss>
    </section>
  );
}

export default DiaryList;
