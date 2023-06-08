import React from "react";
import errorIcon from "../../../../assets/error.svg";
import emptyIcon from "../../../../assets/empty.svg";
import "./ProjectsState.css";

export const ProjectsState = ({ type }) => {
  if (type === "error") {
    return (
      <div className="state">
        <div className="state__body">
          <div className="state__icon">
            <img src={errorIcon} alt="Error Icon" />
          </div>
          <div className="state__content">
            <h2>Oops... Something went wrong</h2>
            <p>Try again later!</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "empty") {
    return (
      <div className="empty" id="empty">
        <div className="state__body">
          <div className="state__icon">
            <img src={emptyIcon} alt="Empty  Icon" />
          </div>
          <div className="state__content">
            <h2>Oops... Nothing was found</h2>
            <p>Try to use another key words for searching instead.</p>
          </div>
        </div>
      </div>
    );
  }
};
