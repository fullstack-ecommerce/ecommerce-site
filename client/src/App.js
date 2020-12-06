import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductsScreen } from "./screens/ProductsScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/products" component={ProductsScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
