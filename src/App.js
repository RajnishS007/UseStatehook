import React, { useState } from "react";

function App() {
  const [counter, countCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => countCounter(counter + 1)}>add</button>
      {counter}
      <button onClick={() => countCounter(counter - 1)}>sub</button>
    </div>
  );
}
export default App;
