import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import DummyData1 from "./DummyData1";
import DummyData2 from "./DummyData2";
import TestingLogin from "./TestingLogin";
import TestingNav from "./TestingNav";

function Demo() {
  const [auth, setauth] = useState(false);
  const [animation, setanimation] = useState(false);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
          <DummyData1 />
          <DummyData2 />
          <button onClick={() => setauth(!auth)}>Change</button>
        </Route>
        <Route path="/login">
          <TestingLogin auth={auth} />
          <div className="div_mainl">
            <button onClick={() => setauth(!auth)}>Change</button>
            <div className={!animation ? "style_div" : "style_div1"}></div>
            <button
              onClick={() => setanimation(!animation)}
              style={{ marginTop: "30px" }}
            >
              Animate
            </button>
          </div>
        </Route>
        <Route path="/logout">
          <h1>Logout</h1>
          <TestingNav />
        </Route>
      </Switch>
    </div>
  );
}

export default Demo;
