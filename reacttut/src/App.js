import React from "react";
import "./App.css";
import "./index.css";

import Heading from "./Heading";
import List from "./List";
import Para from "./Para";

function App() {
  const fname = "Ankit";
  const lname = "Mishra";

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  let date = new Date();
  date = date.getHours();
  let greeting = "";
  const cssStyle = {};

  if (date >= 1 && date < 12) {
    greeting = "Good Morning";
    cssStyle.color = "Green";
  } else if (date >= 12 && date < 4) {
    greeting = "Good Afternoon";
    cssStyle.color = "Red";
  } else if (date >= 4 && date < 8) {
    greeting = "Good Evening";
    cssStyle.color = "Purple";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Black";
  }

  const img1 = "https://picsum.photos/536/354";
  const img2 = "https://picsum.photos/536/352";
  const img3 = "https://picsum.photos/536/344";
  const link1 = "https://www.google.com";

  const heading1 = {
    color: "purple",
    textTransform: "capitalize",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ce8614",
  };

  return (
    <>
      {/* <Heading />
      <Para />
      <List /> */}

      <h3 style={heading1}>
        My name is {fname} {lname}
      </h3>
      <h3 style={{ color: "red", textTransform: "capitalize" }}>
        My name {fname + " " + lname}
      </h3>
      <h3>{`My name using template literals is ${fname} ${lname}`}</h3>

      <p> Current Date is : {currDate} </p>
      <p> Current Time is : {currTime} </p>

      <h3 contentEditable="true" className="heading">
        {" "}
        My name is Editable here {`${fname} ${lname} `}
      </h3>

      <div className="img_div">
        <img src={img1} alt="Random Image" />
        <img src={img2} alt="Random Image" />
        <a href={link1} target="_blank">
          <img src={img3} alt="Random Image" />
        </a>
      </div>

      {/* <div>
      <h1>
        {" "}
        <span style={{ color: "rgb(216, 129, 22)" }}>Hello Ankit,</span>{" "}
        <span style={cssStyle}> {greeting}</span>
      </h1>
    </div> */}
    </>
  );
}

export default App;
