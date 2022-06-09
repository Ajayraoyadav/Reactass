import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import styled from "styled-components";

const Border = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  color: ${(props) => props.color};
  background-color: ${(props) => (props.color === "white" ? "black" : "white")};
`;

export default function Navbars() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Border >
        <h1>Navbar</h1>
        <div>{theme}</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </Border>
    </>
  );
}
