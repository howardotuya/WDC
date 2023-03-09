import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <HashRouter base="/">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
