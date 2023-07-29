import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Join from "./pages/Join";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/join" element={<Join/>}></Route>
    </Routes>
  );
};

export default App;
