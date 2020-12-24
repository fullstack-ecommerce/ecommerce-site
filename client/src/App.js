import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AdminProductsListScreen } from "./screens/AdminProductsListScreen";
import { AdminAddProductScreen } from "./screens/AdminAddProductScreen";
import { CartScreen } from "./screens/CartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { ProductsListScreen } from "./screens/ProductsListScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { AdminUpdateProductScreen } from "./screens/AdminUpdateProductScreen";
import { AdminUsersListScreen } from "./screens/AdminUsersListScreen";
import { AdminUserUpdateScreen } from "./screens/AdminUserUpdateScreen";
import { UserProfileScreen } from "./screens/UserProfileScreen";

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
        <Route exact path="/profile" component={UserProfileScreen} />
        <Route
          exact
          path="/admin/product/add"
          component={AdminAddProductScreen}
        />
        <Route
          exact
          path="/admin/products"
          component={AdminProductsListScreen}
        />
        <Route
          exact
          path="/admin/product/edit/:id"
          component={AdminUpdateProductScreen}
        />
        <Route exact path="/admin/users" component={AdminUsersListScreen} />
        <Route exact path="/admin/user/:id" component={AdminUserUpdateScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
