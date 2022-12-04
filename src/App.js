import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./screens/CreateAccount";
import Home from "./screens/Homepage";
import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home windowSize={windowSize}/>} />
        <Route path="/cre" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
