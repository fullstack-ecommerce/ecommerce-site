import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { ProductsListScreen } from "./screens/ProductsListScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/products" component={ProductsListScreen} />
        
        {/* Need to change this path when there is a product ID */}
        <Route exact path="/productscreen" component={ProductScreen} />
        {/*<Route exact path="/products/:id" component={ProductScreen} /> */}
        
        <Route exact path="/" component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
