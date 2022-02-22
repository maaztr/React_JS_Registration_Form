import React, { useState } from "react";

export const VehicleCards = () => {
  const [card, setcard] = useState([{ length: 0, uid: 0 }]);
  const [colorbtn, setcolorbtn] = useState([{ color: null, id: 0 }]);
  let callback;

  const handleButton = (e) => {
    e.preventDefault();

    if (e.target.name === "add") {
      setcard([...card, { length: card.length, uid: Date.now() }]);
    } else if (e.target.name === "remove" && card.length > 0) {
      let temp = [...card];
      temp.pop();
      setcard([...temp]);
    }
  };

  const colorbutton = (e) => {
    e.preventDefault();

    setcolorbtn([
      ...colorbtn,
      { color: e.currentTarget.name, id: e.currentTarget.id },
    ]);

    //console.log(e.target.key)
    //setcard([...card, {color:"green" }]);
    //setcolor([...paint, { paint: paint.name, id: Date.now() }]);
  };

  return (
    <>
      <div className="btnsTotalVehicles">
        <div>
          <button name="add" onClick={handleButton}>
            +
          </button>
        </div>
        <div>
          <button name="remove" onClick={handleButton}>
            -
          </button>
        </div>
      </div>
      {card.map(({ uid, color }) => {
        return (
          <div className="vehicle">
            <div>
              <h2 id="vehicleNum"></h2>
            </div>
            <div className="colorButtons">
              <div>
                <button name="green" id={uid} onClick={colorbutton} >
                  green
                </button>
              </div>
              <div>
                <button name="grey" id={uid} onClick={colorbutton}>
                  grey
                </button>
              </div>
              <div>
                <button name="yellow" id={uid} onClick={colorbutton}>
                  yellow
                </button>
              </div>
              <div>
                <button name="brown" id={uid} onClick={colorbutton}>
                  brown
                </button>
              </div>
            </div>
            <div>
              <h2>What is the size of the car?</h2>
            </div>
            <div className="sizeVehicle">
              <div>
                <p>Length</p>
              </div>
              <div>
                <input type="text" placeholder="Length" />
              </div>
              <div>
                <p>Width</p>
              </div>
              <div>
                <input type="text" placeholder="width" />
              </div>
            </div>
            
            <div
              className="vehicleSize"
              id={uid}
              callback = {colorbtn.filter((color) => color.id === uid)}
              

               //style={{ background: colorbtn.color }} 
            >
              {console.log(callback)}
              <p>Car size & color {uid}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
