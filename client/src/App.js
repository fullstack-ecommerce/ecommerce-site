import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <h1>eCommerce Site</h1>
    </Router>
  );
}

export default App;
