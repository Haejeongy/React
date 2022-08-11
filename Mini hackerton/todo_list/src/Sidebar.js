import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styledicon = styled.div`
  .icons {
    width: 30px;
    height: 30px;
    display: flex;
    padding: 10px;
  }
`;

export function Sidebar() {
  return (
    <section>
      <Styledicon>
        <div>
          <Link to="">
            <img
              className="icons"
              src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/ul-pen.svg"
              alt="icon"
            ></img>
          </Link>
          <Link to="/diarylist">
            <img
              className="icons"
              src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/ul-diary.svg"
              alt="icon"
            ></img>
          </Link>
          <Link to="/setting">
            <img
              className="icons"
              src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/ul-setting.svg"
              alt="icon"
            ></img>
          </Link>
        </div>
      </Styledicon>
    </section>
  );
}

export default Sidebar;
