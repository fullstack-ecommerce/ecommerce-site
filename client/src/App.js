import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CartScreen } from "./screens/CartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { ProductsListScreen } from "./screens/ProductsListScreen";
import { RegisterScreen } from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/products" component={ProductsListScreen} />

        {/* Need to change this path when there is a product ID */}
        <Route exact path="/productscreen" component={ProductScreen} />
        {/*<Route exact path="/products/:id" component={ProductScreen} /> */}

        {/* Need to change this path when there is cart ID */}
        <Route exact path="/cartscreen" component={CartScreen} />
        {/*<Route exact path="/cart/:id" component={CartScreen} />*/}

        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
