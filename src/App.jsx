import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Pages/Error";
import UserAuth from "./Pages/UserAuth";
import SignUpPage from "./Pages/SignUp";
import LoginPage from "./Pages/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} /> //if no value passed to index then
        it's default vslue is boolean true
        <Route path="products" element={<Products />} />
        <Route
          path="/product-details/:productId?"
          element={<ProductDetails />}
        />
        <Route path="user-auth" element={<UserAuth />}>
          <Route
            index
            element={
              <>
                <h1>Index route for user auth </h1>
              </>
            }
          />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
