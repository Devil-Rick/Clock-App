import React from "react";

function App() {
  setInterval(showTime, 1000);
  let time = "TIME";

  const [Time, setTime] = React.useState(time);
  function showTime() {
    setTime((time = new Date().toLocaleTimeString()));
  }
  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
