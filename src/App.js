import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./screens/CreateAccount";
import Home from "./screens/Homepage";
import { useEffect, useState } from "react";
import Nft from "./screens/NftPage";
import Rankings from "./screens/Rankings";

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
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/nft" element={<Nft windowSize={windowSize}/>} />
        <Route path="/rankings" element={<Rankings/>} />
      </Routes>
    </div>
  );
}

export default App;
