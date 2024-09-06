import React from "react";
import { Button } from "../Shared/Button/Button";
import { colors } from "../../styles/variables";
import font from "../../styles/font.module.css";
import "./style.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="right">
        <div
          className={`title ${font.title_72}`}
          style={{ color: colors.woodBark }}
        >
          The kind of <span className={`title ${font.title_72}`} style={{ color: colors.jarrah }}>furniture</span>{" "}
          you have been looking for
        </div>
        <div className={`btns ${font.title_24}}`} style={{ color: colors.brightBrown }}>
          <Button bg={colors.sour} radius="0.75rem" p="1.375rem 2.5rem">
            <div className="btn">
              <img src="/button/search.svg" alt="" />
              <p>SEARCH CATALOG</p>
            </div>
          </Button>
          <Button border={`1px solid ${colors.brightBrown}`} radius="0.75rem" p="1.375rem 3.5rem">
            <div className="btn">
              <img src="/button/play_circle_outline.svg" alt="" />
              <p>WATCH VIDEOS</p>
            </div>
          </Button>
        </div>
      </div>
      <div className="left"></div>
    </div>
  );
};
