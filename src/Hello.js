import { useState } from "react";

function Hello() {
  const [vardins, setVardins] = useState("");
  return (
    <>
      <input
        value={vardins}
        onChange={(event) => setVardins(event.target.value)}
      />
      <p>Hello, {vardins}</p>
    </>
  );
}

export default Hello;
