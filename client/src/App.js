import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <h1>eCommerce Site</h1>
      <Footer />
    </Router>
  );
}

export default App;
