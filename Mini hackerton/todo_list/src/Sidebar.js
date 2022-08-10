import React from "react";
import styled from "styled-components";

export const Styledicon = styled.div`
  .icons {
  width: 30px;
  height: 30px;
  display: flex;
  }
`;

export const Sidebar = () => {
  return (
    <section>
      <Styledicon>
        <div>
          <img
            className="icons"
            src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/ul-pen.svg"
            alt="icon"
          ></img>
          <img
            className="icons"
            src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/ul-diary.svg"
            alt="icon"
          ></img>
          <img
            className="icons"
            src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/ul-setting.svg"
            alt="icon"
          ></img>
        </div>
      </Styledicon>
    </section>
  );
};

export default Sidebar;
