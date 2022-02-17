import React from "react";
import "./initiative.css";
import { InitiativeData } from "../../data/InitiativeData";
function Initiative() {
  let arr = InitiativeData();
  return (
    <>
      <div className="initiative">
        <div className="heading">Our Initiatives</div>
        <div className="initiative-container">
          {arr.map((item) => {
            return (
              <div className="item">
                <img src={item.image} alt="" />
                <div className="item-after">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                  <button>Learn More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Initiative;
