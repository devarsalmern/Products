import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Pages/Error";
import UserAuth from "./Pages/UserAuth";
import SignUpPage from "./Pages/SignUp";
import LoginPage from "./Pages/Login";
import MainLayout from "./layouts/MainLayout";
import Categories from "./Pages/Category";
import ProfilePage from "./Pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        //if no value passed to index then it's default vslue is boolean true
        <Route
          path="category"
          element={
            <MainLayout>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/product-details/:productId?"
          element={<ProductDetails />}
        />
        <Route path="user-auth" element={<UserAuth />}>
          {/* <Route
            index
            element={
              <>
                <h1>Index route for user auth </h1>
              </>
            }
          /> */}
          //index will show when route is user-auth in this case
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            </PrivateRoute>
          }
        />
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
