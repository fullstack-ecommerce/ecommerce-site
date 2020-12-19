import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AdminProductsListScreen } from "./screens/AdminProductsListScreen";
import { AdminScreen } from "./screens/AdminScreen";
import { CartScreen } from "./screens/CartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { ProductsListScreen } from "./screens/ProductsListScreen";
import { RegisterScreen } from "./screens/RegisterScreen";

// hello there

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/products" component={ProductsListScreen} />
        <Route exact path="/products/:id" component={ProductScreen} />

        <Route exact path="/cart" component={CartScreen} />

        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/admin/product/add" component={AdminScreen} />
        <Route exact path="/admin/products" component={AdminProductsListScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
