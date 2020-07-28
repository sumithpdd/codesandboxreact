import React from "react";
import "./styles.css";

function Lake(props) {
  return <h1>{props.name}</h1>;
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Lake name="Lake Tahoe" />
    </div>
  );
}
