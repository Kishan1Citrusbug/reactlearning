import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchButton from "./Button";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
       acbdcdbcdf
      </p>
      <SwitchButton />
    </div>
  );
}

export default App;
