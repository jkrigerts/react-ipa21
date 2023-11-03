import { useState } from "react";

function CheckBox(props) {
  const [atzīmēts, setAtzīmēts] = useState(props.checked);
  return (
    <>
      <label>
        {props.label}
        <input
          type="checkbox"
          checked={atzīmēts}
          onChange={() => {
            setAtzīmēts(!atzīmēts);
          }}
        />
      </label>
    </>
  );
}

export default CheckBox;
