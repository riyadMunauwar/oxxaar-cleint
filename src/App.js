import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./services/firebaseInit";
import { getAllProduct } from "./store/products";
import { getAllOrder } from "./store/orders";
import { authStateChange } from "./store/auth";
import { getAllCategory } from "./store/category";
import Home from "./pages/homePage";
import Header from "./components/header";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import ProductDetailsPage from "./pages/productDetailsPage";
import CartPage from "./pages/cartPage";
import CheckOutPage from "./pages/checkoutPage";
import CategoryPage from "./pages/categoryPage";
import ResultPage from "./pages/resultPage";
import WishPage from "./pages/wishPage";
import UserDashboardPage from "./pages/userDashboardPage";
import AdminPage from "./pages/adminPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategory());
    dispatch(getAllOrder());
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(authStateChange(user));
    }
  });

  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/product/:productSlug/:productId"
          component={ProductDetailsPage}
        />
        <Route path="/admin" component={AdminPage} />
        <Route path="/collection/:category" component={CategoryPage} />
        <Route path="/profile" component={UserDashboardPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/wish-list" component={WishPage} />
        <Route path="/checkout" component={CheckOutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
