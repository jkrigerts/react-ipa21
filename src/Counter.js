import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  function palielinatajs() {
    setCount(count + parseInt(input));
    console.log("Count ir " + count);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <input type="number" value={input} onChange={handleInput} />
      <button onClick={palielinatajs}>+{input}</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
