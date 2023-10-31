import Body from "./Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Final from "./Final";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Final/:selected/:totalprice" element={<Final />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
