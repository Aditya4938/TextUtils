import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import AboutUs from "./components/AboutUs";
import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      showAlert("Dark mode is enabled", "success");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "grey";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "white";
    } else {
      setDarkMode("light");
      showAlert("Light mode is enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "white";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "black";
    }
  };
  const [rMode, setRMode] = useState("light");
  let toggleRMode = () => {
    if (rMode === "light") {
      setRMode("danger");
      showAlert("Red mode is enabled", "success");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "red";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "white";
    } else {
      setRMode("light");
      showAlert("Light mode is enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "white";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "black";
    }
  };
  return (
    <>
      {/* <Router> */}
        <div className="blank"></div>
        <Navbar
          title="TextUtils2"
          about="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleRMode={toggleRMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path="/About" element={<AboutUs />} />
            <Route
              path="/"
              element={
              }
            />
          </Routes> */}
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
// #212529
