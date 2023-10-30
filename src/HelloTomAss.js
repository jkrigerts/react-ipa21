import { useState } from "react";

function Hello() {
  const [vardins, setVardins] = useState({
    vardainais: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVardins({
      ...vardins,
      [name]: value,
    });
  };
  return (
    <>
      <input
        name="vardainais"
        value={vardins.vardainais}
        onChange={handleChange}
      />
      <p>Hello, {vardins.vardainais}</p>
    </>
  );
}

export default Hello;
