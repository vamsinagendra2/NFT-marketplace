import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./screens/CreateAccount";
import Home from "./screens/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
