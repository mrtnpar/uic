import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TimeBars } from "./TimeBars";

function App() {
  return (
    <div className="app">
      <header className="app-header">UI Challenges</header>

      <div className="app-content">
        <Routes>
          <Route
            path="/time-bars"
            element={<TimeBars title="Prices over time" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
