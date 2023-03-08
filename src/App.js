import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
