import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20ps",
  border: "1px solid black"
};

customStyle.color = "blue";
customStyle.border = "20px dashed red";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
