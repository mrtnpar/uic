import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TimeBars } from "./TimeBars";

function App() {
  return (
    <div className="App">
      <header className="App-header">UI Challenges</header>
      <Routes>
        <Route path="/time-bars" element={<TimeBars />} />
      </Routes>
    </div>
  );
}

export default App;
