import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
function TestingNav() {
  const [state, setstate] = useState(false);
  let history = useHistory();

  if (state) {
    history.push("/login");
  }
  return (
    <div>
      <button onClick={() => setstate(!state)}>Relocate</button>
    </div>
  );
}

export default TestingNav;
