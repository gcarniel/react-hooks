import React from "react";

import "./styles.css";

function Content({ title, children, showContent = false, setShowContent }) {
  const handleBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowContent(false);
  };

  return (
    <div
      onClick={() => setShowContent(true)}
      className={`${showContent ? "content" : "container"}`}
    >
      {showContent ? (
        <div className="explication">
          <div className="title-container">
            <button onClick={handleBack}>Fechar</button>
            <span className="title">{title}</span>
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
}

export default Content;
