import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("green");
  const handleClick = () => {
    setColor(() => {
      return color === "green" ? "red" : "green";
    });
  };
  return (
    <div style={{ border: "4px solid rgb(94, 205, 39)", height: "200px" }}>
      Hello this is sub app {"(App 2)"}
      <div>
        <button style={{ backgroundColor: color }} onClick={handleClick}>
          Change Color to {color === "red" ? "green" : "red"}!
        </button>
      </div>
    </div>
  );
};

export default App;
