import React from "react";
import "./styles.css";
import { useWidth } from "./measureHook";

const DivDomWidth = () => {
  const { width } = useWidth();
  return (
    <div
      style={{ textAlign: "start" }}
    >{`div calculated DOM width: ${width}`}</div>
  );
};

const EditableDiv = () => {
  const { setWidth } = useWidth();

  return (
    <div
      onInput={(event) => {
        setWidth(event?.currentTarget?.getBoundingClientRect().width);
      }}
      style={{ width: "fit-content", border: "1px solid black" }}
      ref={(el) => {
        setWidth(el?.getBoundingClientRect().width);
      }}
      contentEditable
    >
      edit me
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <EditableDiv />
      <DivDomWidth />
    </div>
  );
}
