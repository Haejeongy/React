import React from "react";
import styled from "styled-components";

const SettingCss = styled.div`
  display: flex;
  justify-content: center;
`;

function Setting() {
  return (
    <section>
      <SettingCss>
        <div>
          <p>감사일기</p>
          <input placeholder='your journal here..'></input>
          <button>submit</button>
        </div>
      </SettingCss>
    </section>
  );
}

export default Setting;