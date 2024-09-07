import React from "react";
import { Button } from "../Shared/Button/Button";
import "./style.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="right">
        <div
          className="title title_72"
        >
          The kind of <span className="title_72">furniture</span>{" "}
          you have been looking for
        </div>
        <div className="btns title_24">
          <Button bg="var(--color-sour)" radius="0.75rem" p="1.375rem">
            <div className="btn">
              <img src="/button/search.svg" alt="" />
              <p>SEARCH CATALOG</p>
            </div>
          </Button>
          <Button border="1px solid var(--color-brightBrown)" radius="0.75rem" p="1.375rem">
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
