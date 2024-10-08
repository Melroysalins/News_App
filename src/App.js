import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import HeadlinesPage from "./pages/headlinespage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headlines" element={<HeadlinesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
