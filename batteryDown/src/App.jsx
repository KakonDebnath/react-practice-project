import React, { useState } from 'react';

const App = () => {
  const [battery, setBattery] = useState(100);
  const handelBattery = () => {
    if (battery === 0) {
      return;
    } else {
      setBattery(battery - 10);
    }
  }
  return (
    <div style={{ textAlign: "center", padding: "20px 0", }}>
      <h1>Welcome To Our New Project</h1>
      <p>Battery is {battery}%</p>
      <button onClick={handelBattery}>Battery Down</button>
    </div>
  );
};

export default App;