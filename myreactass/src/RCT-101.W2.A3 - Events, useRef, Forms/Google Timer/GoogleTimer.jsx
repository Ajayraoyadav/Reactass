import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function GoogleTimer() {
  const [sec, setsec] = useState(0);
  const [mint, setmint] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setsec(sec + 1);
      
      if (sec == 59) {
        setmint(mint + 1);
        setsec(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleReset = () => {
    setsec(0);
    setmint(0);
  };

  const handleStop = () => {
    clearInterval(timer);
  };

  return (
    <>
      <h1> Google Timer</h1>
      <h3>
        {mint < 10 ? "0" + mint : mint} : {sec < 10 ? "0" + sec : sec}
      </h3>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}