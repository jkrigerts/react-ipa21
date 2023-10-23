import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function palielinatajs() {
    setCount(count + 1);
    console.log("Count ir " + count);
  }

  return (
    <div>
      <h2>Skaitītājs</h2>
      <button onClick={palielinatajs}>+1</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
