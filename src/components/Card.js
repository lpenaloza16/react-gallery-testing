import React from "react";
import "./style.css";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
-
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card_parent">
      <div className="card_slot">
        <div className="card-pic"></div>
        <span className="card_info">
          <img className="rating" src="../images/star.png" />
          {3.6}
          <p className="card_desc"> Life lessons from Katie Zaferes</p>
        </span>
      </div>
    </div>
  );
}
