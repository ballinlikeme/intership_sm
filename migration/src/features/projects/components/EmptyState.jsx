import React from "react";
import emptyIcon from "../assets/empty.svg";
import "../../authentication/styles/emptyState.css";

export const EmptyState = () => {
  return (
    <div className="empty" id="empty">
      <div className="empty__body">
        <div className="empty__icon">
          <img src={emptyIcon} alt="Empty State Icon" />
        </div>
        <div className="empty__content">
          <h2>Oops... Nothing was found</h2>
          <p>Try to use another key words for searching instead.</p>
        </div>
      </div>
    </div>
  );
};
