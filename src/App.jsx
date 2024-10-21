import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App =() => {
  return(
    <Router>
    <Header />
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </Router>
  );
}

export default App;